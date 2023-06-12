import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/Model/file-handle.model';

@Directive({
  selector: '[appDrag]',
  standalone:true
})
export class DragDirective {
  @Output() files: EventEmitter<FileHandle> = new EventEmitter();
  @HostBinding("style.background") private background = "#eee";

  constructor(private sanitaizer: DomSanitizer) {}

  @HostListener("dragover", ["$event"])
  public onDragOver(evt:DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999";
  
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(evt:DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';

  }

  @HostListener("drop", ["$event"])
  public onDrop(evt:DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
const file=evt.dataTransfer!.files[0]
    let fileHandle: FileHandle={
     file :file ,
     url : this.sanitaizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(file)
    )}
    this.files.emit(fileHandle)
  }
}
