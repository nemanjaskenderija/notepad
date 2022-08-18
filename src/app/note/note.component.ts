import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { notes } from '../types/Notes';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  constructor(private noteService: NoteServiceService) {}
  updateNote: any;
  counter = -1;

  noteArray: notes[] = [
    {
      id: 0,
      title: 'First Note',
      content: '',
    },
    {
      id: 1,
      title: 'Second Note',
      content: '',
    },
    {
      id: 2,
      title: 'Third Note',
      content: '',
    },
  ];

  ngOnInit(): void {
    this.noteService.getNoteData().subscribe((info) => {
      this.updateNote = info;
      if (this.counter < 3 && this.counter > -1) {
        this.noteArray[this.counter].content = info;
        JSON.stringify(this.noteArray[this.counter].content);
        if (this.noteArray[this.counter].content != '') {
          this.counter++;
        }
      } else if (this.counter < 3) {
        this.counter++;
      } else {
        if (info != '') {
          this.noteArray[2].content = this.noteArray[1].content;
          this.noteArray[1].content = this.noteArray[0].content;
          this.noteArray[0].content = info;
        }
      }
    });
  }
  limitTitle(orderNumber: any) {
    let noteTitle = document.querySelectorAll('#note-title');
    if (noteTitle[orderNumber].innerHTML.length > 25) {
      let cut = noteTitle[orderNumber].innerHTML.substring(0, 25);
      noteTitle[orderNumber].innerHTML = cut;
    }
  }
}
