import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  search="\u{1f50d}"
  searchResults:string[] = []
  searchStr: string =''


  onSearch(str: KeyboardEvent){
    this.searchStr+=str.key
    console.log(this.searchStr);
    if(this.searchStr.length>3){
      setTimeout(() => {
        this.searchResults.push('abc')
        this.searchResults.push('def')
        this.searchResults.push('ghi')
        this.searchResults.push('jkl')
        this.searchResults.push('mno')
        this.searchResults.push('pqr')
        this.searchResults.push('stu')
        this.searchResults.push('vwxyz')
      }, 1000);
    }



  }

}
