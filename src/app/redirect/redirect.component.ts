import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  id: string
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }
}
