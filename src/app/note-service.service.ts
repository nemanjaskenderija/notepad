import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteServiceService {
  private newNote = new BehaviorSubject<string>('');

  setNoteData(note: any) {
    this.newNote.next(note);
  }

  getNoteData() {
    return this.newNote.asObservable();
  }

  constructor() {}
}
