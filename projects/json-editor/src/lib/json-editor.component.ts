import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import JSONEditor, { JSONEditorOptions } from "jsoneditor";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'json-editor,xe-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JsonEditorComponent),
      multi: true
    }
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class JsonEditorComponent implements ControlValueAccessor, OnInit, OnDestroy {
  private editor: any;
  public id = 'angjsoneditor' + Math.floor(Math.random() * 1000000);
  disabled = false;
  isFocused = false;

  public optionsChanged = false;

  @ViewChild('jsonEditorContainer', { static: true }) jsonEditorContainer!: ElementRef;

  private _data: Object = {};

  @Input() options: JSONEditorOptions = {};
  @Input('data')
  set data(value: Object) {
    this._data = value;
    if (this.editor) {
      this.editor.destroy();
      this.ngOnInit();
    }
  }
  @Input() debug = false;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }


  ngOnInit() {
    let optionsBefore = this.options;
    if (!this.optionsChanged && this.editor) {
      optionsBefore = this.editor.options;
    }

    if (!this.options.onChangeJSON && this.jsonChange) {
      this.options.onChangeJSON = this.onChangeJSON.bind(this);
    }
    if (!this.options.onChange && this.change) {
      this.options.onChange = this.onChange.bind(this);
    }
    const optionsCopy = Object.assign({}, optionsBefore);

    // expandAll is an option only supported by ang-jsoneditor and not by the the original jsoneditor.
    // delete optionsCopy.expandAll;
    if (this.debug) {
      console.log(optionsCopy, this._data);
    }
    if (!this.jsonEditorContainer.nativeElement) {
      console.error(`Can't find the ElementRef reference for jsoneditor)`);
    }

    if (optionsCopy.mode === 'text' || optionsCopy.mode === 'code') {
      optionsCopy.onChangeJSON = undefined;
    }

    this.editor = new JSONEditor(this.jsonEditorContainer.nativeElement, optionsCopy, this._data);

    // if (this.options.expandAll) {
    //   this.editor.expandAll();
    // }
  }

  ngOnDestroy() {
    this.destroy();
  }


  /**
   * ngModel
   * ControlValueAccessor
   */

  // ControlValueAccessor implementation
  writeValue(value: any) {
    this.data = value;
  }

  // Implemented as part of ControlValueAccessor
  registerOnChange(fn: (e: any) => void) {
    this.onChangeModel = fn;
  }

  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Implemented as part of ControlValueAccessor.
  private onTouched = () => {
  };

  // Implemented as part of ControlValueAccessor.
  private onChangeModel = (e: any) => {
  };

  public onChange() {
    if (this.editor) {
      try {
        const json = this.editor.get();
        this.onChangeModel(json);
        this.change.emit(json);
      } catch (e) {
        if (this.debug) {
          console.log(e);
        }
      }
    }
  }

  public onChangeJSON() {
    if (this.editor) {
      try {
        this.jsonChange.emit(this.editor.get());
      } catch (e) {
        if (this.debug) {
          console.log(e);
        }
      }
    }
  }


  /**
   * JSON EDITOR FUNCTIONS
   */

  public collapseAll() {
    this.editor.collapseAll();
  }

  public expandAll() {
    this.editor.expandAll();
  }

  public focus() {
    this.editor.focus();
  }

  public get(): JSON {
    return this.editor.get();
  }

  // public getMode(): JsonEditorMode {
  //   return this.editor.getMode() as JsonEditorMode;
  // }

  public getName(): string {
    return this.editor.getName();
  }

  public getText(): string {
    return this.editor.getText();
  }

  public set(json: JSON) {
    this.editor.set(json);
  }

  // public setMode(mode: JsonEditorMode) {
  //   this.editor.setMode(mode);
  // }

  public setName(name: string) {
    this.editor.setName(name);
  }

  public setSelection(start: any, end: any) {
    this.editor.setSelection(start, end);
  }

  public getSelection(): any {
    return this.editor.getSelection();
  }

  public getValidateSchema(): any {
    return this.editor.validateSchema;
  }

  public setSchema(schema: any, schemaRefs: any) {
    this.editor.setSchema(schema, schemaRefs);
  }

  public search(query: string) {
    this.editor.search(query);
  }

  public setOptions(newOptions: JSONEditorOptions) {
    if (this.editor) {
      this.editor.destroy();
    }
    this.optionsChanged = true;
    this.options = newOptions;
    this.ngOnInit();
  }

  public update(json: JSON) {
    this.editor.update(json);
  }

  public destroy() {
    this.editor?.destroy();
  }

  public getEditor() {
    return this.editor;
  }

  public isValidJson() {
    try {
      JSON.parse(this.getText());
      return true;
    } catch (e) {
      return false;
    }
  }
}
