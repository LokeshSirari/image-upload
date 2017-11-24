import { Component } from '@angular/core';
import { ImageService } from './image.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private imageService: ImageService) { }
  title = 'app';

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
      this.image.name = file.name
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.image.base64textString = btoa(binaryString);
    this.addImage();
  }
  image = {
    name: "",
    base64textString: ""
  }
  addImage() {
    this.imageService.postImage(this.image).subscribe(res => {
      console.log(res);
      if (res.success == true) {
        alert("Image Added Successfully");
      }
      else {
        alert(res);
      }
    });
  }
  images: any;
  showImages() {
    this.imageService.getMovies().subscribe(res => {
      this.images = res;
    });

  }
}
