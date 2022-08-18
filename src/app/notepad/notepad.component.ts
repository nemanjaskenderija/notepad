import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css'],
})
export class NotepadComponent implements OnInit {
  note: string = '';

  sendNote() {
    this.noteService.setNoteData(this.note);
    this.note = '';
  }

  constructor(private noteService: NoteServiceService) {}

  ngOnInit(): void {}
}
