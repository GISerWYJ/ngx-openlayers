/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { MapComponent } from './map.component';
import { Overlay, PanOptions } from 'ol';
import { ContentComponent } from './content.component';
export class OverlayComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    }
}
OverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-overlay',
                template: '<ng-content></ng-content>',
            },] },
];
/** @nocollapse */
OverlayComponent.ctorParameters = () => [
    { type: MapComponent }
];
OverlayComponent.propDecorators = {
    content: [{ type: ContentChild, args: [ContentComponent,] }],
    id: [{ type: Input }],
    offset: [{ type: Input }],
    positioning: [{ type: Input }],
    stopEvent: [{ type: Input }],
    insertFirst: [{ type: Input }],
    autoPan: [{ type: Input }],
    autoPanAnimation: [{ type: Input }],
    autoPanMargin: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    OverlayComponent.prototype.componentType;
    /** @type {?} */
    OverlayComponent.prototype.instance;
    /** @type {?} */
    OverlayComponent.prototype.element;
    /** @type {?} */
    OverlayComponent.prototype.content;
    /** @type {?} */
    OverlayComponent.prototype.id;
    /** @type {?} */
    OverlayComponent.prototype.offset;
    /** @type {?} */
    OverlayComponent.prototype.positioning;
    /** @type {?} */
    OverlayComponent.prototype.stopEvent;
    /** @type {?} */
    OverlayComponent.prototype.insertFirst;
    /** @type {?} */
    OverlayComponent.prototype.autoPan;
    /** @type {?} */
    OverlayComponent.prototype.autoPanAnimation;
    /** @type {?} */
    OverlayComponent.prototype.autoPanMargin;
    /**
     * @type {?}
     * @private
     */
    OverlayComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFPdkQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQXdCM0IsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQXZCckMsa0JBQWEsR0FBRyxTQUFTLENBQUM7SUF1QmMsQ0FBQzs7OztJQUV6QyxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzs7O1lBUlEsWUFBWTs7O3NCQWFsQixZQUFZLFNBQUMsZ0JBQWdCO2lCQUc3QixLQUFLO3FCQUVMLEtBQUs7MEJBRUwsS0FBSzt3QkFFTCxLQUFLOzBCQUVMLEtBQUs7c0JBRUwsS0FBSzsrQkFFTCxLQUFLOzRCQUVMLEtBQUs7Ozs7SUFwQk4seUNBQTBCOztJQUMxQixvQ0FBa0I7O0lBQ2xCLG1DQUFpQjs7SUFDakIsbUNBQzBCOztJQUUxQiw4QkFDb0I7O0lBQ3BCLGtDQUNpQjs7SUFDakIsdUNBQ3lDOztJQUN6QyxxQ0FDbUI7O0lBQ25CLHVDQUNxQjs7SUFDckIsbUNBQ2lCOztJQUNqQiw0Q0FDNkI7O0lBQzdCLHlDQUNzQjs7Ozs7SUFFViwrQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE92ZXJsYXksIFBhbk9wdGlvbnMgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IE92ZXJsYXlQb3NpdGlvbmluZyBmcm9tICdvbC9PdmVybGF5UG9zaXRpb25pbmcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtb3ZlcmxheScsXHJcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29tcG9uZW50VHlwZSA9ICdvdmVybGF5JztcclxuICBpbnN0YW5jZTogT3ZlcmxheTtcclxuICBlbGVtZW50OiBFbGVtZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoQ29udGVudENvbXBvbmVudClcclxuICBjb250ZW50OiBDb250ZW50Q29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBvZmZzZXQ6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpXHJcbiAgcG9zaXRpb25pbmc6IE92ZXJsYXlQb3NpdGlvbmluZyB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHN0b3BFdmVudDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGluc2VydEZpcnN0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgYXV0b1BhbjogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGF1dG9QYW5BbmltYXRpb246IFBhbk9wdGlvbnM7XHJcbiAgQElucHV0KClcclxuICBhdXRvUGFuTWFyZ2luOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29udGVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNvbnRlbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJsYXkodGhpcyk7XHJcbiAgICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZE92ZXJsYXkodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZU92ZXJsYXkodGhpcy5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==