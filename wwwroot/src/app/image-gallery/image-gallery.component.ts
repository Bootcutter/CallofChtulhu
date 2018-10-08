import { Component,Input, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
@Input() persons: Array<any>;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewChecked() {
    let self=this;

    $('.open-modal-custom').on('click', function()
    {
      var id ='#'+ $(this).attr('data-target-id') + 'image';
      $(id).modal('show');
    })
    
    
}
  
}
