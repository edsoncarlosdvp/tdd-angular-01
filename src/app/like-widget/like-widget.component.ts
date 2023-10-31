import { Component, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from 'puppeteer';
import { UniqueIdService } from 'src/shared/services/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})

export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;

  fonts = { faThumbsUp }

  constructor (private uniqueIdService: UniqueIdService) {}

  public like(): void {
    this.liked.emit();
  }

  public ngOnInit(): void {
      if (!this.id) {
        this.id = this.uniqueIdService.generatedUniqueIdWithPrefix('liked-widget');
      }
  }
}