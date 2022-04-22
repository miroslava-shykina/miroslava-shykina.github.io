import { Component } from '@angular/core';


@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent {
  public title = 'Lessons';
  public firstWords = 'java,tottenham';
  public myTextarea!: string;
  public btnclouseColor!: string;
  public badWord!: string;
  public placeholder = 'word here..';
  public isValue = false;
  public isNoValue = false;
  public isValueTextArea = false;
  public isNoValueTextArea = false;
  public placeholder2 = 'text here..';

  clienText() {
    this.myTextarea = '';
    return this.myTextarea;
  }

  addBadWords() {
    if (this.badWord) {
      this.isNoValue = true;
      this.isValue = false;
      this.placeholder = 'word here..';

      if (this.firstWords == '') {
        this.firstWords = this.badWord;
        this.badWord = '';
      } else {
        this.firstWords = `${this.firstWords},${this.badWord}`;
        this.badWord = '';
      }
    } else {
      this.isValue = true;
      this.isNoValue = false;
      this.placeholder = 'Please write a word!';
    }
  }

  cenzor() {
    if (this.myTextarea) {
      this.isNoValueTextArea = true;
      this.isValueTextArea = false;
      this.placeholder2 = 'text here..';

      let textArea = this.myTextarea;
      let badWords = this.firstWords;

      let textAreaSplit: string[] = textArea.split(/\s+/);
      let badWordsSplit: string[] = badWords.split(',');

      for (let i = 0; i < badWordsSplit.length; i++) {
        for (let j = 0; j < textAreaSplit.length; j++) {
          if (textAreaSplit[j] === badWordsSplit[i]) {
            let ar: string = textAreaSplit[j];
            let newAr = ar.split('');
            for (let a = 0; a < newAr.length; a++) {
              newAr[a] = '*';
            }
            let newArjoin: string = newAr.join('');
            textAreaSplit[j] = newArjoin;
            let finishAr = textAreaSplit.join(' ');
            this.myTextarea = finishAr;
          }
        }
      }
    } else {
      this.isValueTextArea = true;
      this.isNoValueTextArea = false;
      this.placeholder2 = 'Please write a text!';
    }
  }
}
