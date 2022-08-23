import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbomodal"
export default class extends Controller {
  // connect() {
  //   console.log('Hello from turbomodal')
  // }

  submitEnd(e){
     if (e.detail.success ){
       this.hideModal()
     }
  }

  hideModal(){
    this.element.remove()
  }
}
