import { AppComponent } from './app.component';
import { async, TestBed } from '@angular/core/testing';
import { MenuComponent } from "./navegacao/menu/menu.component";
import { FooterComponent } from "./navegacao/footer/footer.component";
import { IterableDiffers } from '@angular/core';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                MenuComponent,
                FooterComponent
            ]
        }).compileComponents();
    }));

    it('Should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('Should have as title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('MeuProjeto');
    });

    it('Should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.container a').textContent).toContain('Minha App Angular');
    });

});