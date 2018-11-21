import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxSnippetComponent } from './inbox-snippet.component';

describe('InboxSnippetComponent', () => {
  let component: InboxSnippetComponent;
  let fixture: ComponentFixture<InboxSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
