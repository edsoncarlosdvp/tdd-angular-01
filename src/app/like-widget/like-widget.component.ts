import { Component, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';
import { UniqueIdService } from 'src/shared/services/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})

export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<boolean>();
  @Input() public likes = 0;
  @Input() public id: string | null | undefined = null;

  fonts = { faThumbsUp }

  constructor (private uniqueIdService: UniqueIdService) {}


  public ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generatedUniqueIdWithPrefix('liked-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }
}
