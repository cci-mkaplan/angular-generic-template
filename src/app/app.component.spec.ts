import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app');
  }));

  it('should render render title in a h2 tag',async(()=>{
   const fixture= TestBed.createComponent(AppComponent);
   fixture.detectChanges();
   const compiled=fixture.debugElement.nativeElement;
   expect(compiled.querySelector('h2').textContent).toContain('Welocome to app 2');
  }));

  it('should have with IMG attribute is set up as 300 px',async(()=>{
    const fixture= TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled= fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').component.attribute['width']).toEqual('300');
  }));
  // it('should rende page in a input tag',async(()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('input').textContent).toContain('mutlu ve eray');
  // }));

});
function newFunction() {
  debugger;
}

