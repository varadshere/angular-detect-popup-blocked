import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.downLoadFile('dataddatadtadadtad');
  }

  downLoadFile(data) {
    var blob = new Blob([data], { type: 'application/pdf' });
    var url = window.URL.createObjectURL(blob);
    var pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('pop up blocked!!')
    }
  }
  name = 'Angular';
}
