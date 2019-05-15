/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { MapComponent } from './map.component';
import { Overlay, PanOptions } from 'ol';
import { ContentComponent } from './content.component';
var OverlayComponent = /** @class */ (function () {
    function OverlayComponent(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    /**
     * @return {?}
     */
    OverlayComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    };
    /**
     * @return {?}
     */
    OverlayComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    };
    OverlayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-overlay',
                    template: '<ng-content></ng-content>',
                },] },
    ];
    /** @nocollapse */
    OverlayComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
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
    return OverlayComponent;
}());
export { OverlayComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQ7SUE0QkUsMEJBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUF2QnJDLGtCQUFhLEdBQUcsU0FBUyxDQUFDO0lBdUJjLENBQUM7Ozs7SUFFekMsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7O2dCQTFDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzs7O2dCQVJRLFlBQVk7OzswQkFhbEIsWUFBWSxTQUFDLGdCQUFnQjtxQkFHN0IsS0FBSzt5QkFFTCxLQUFLOzhCQUVMLEtBQUs7NEJBRUwsS0FBSzs4QkFFTCxLQUFLOzBCQUVMLEtBQUs7bUNBRUwsS0FBSztnQ0FFTCxLQUFLOztJQWtCUix1QkFBQztDQUFBLEFBM0NELElBMkNDO1NBdkNZLGdCQUFnQjs7O0lBQzNCLHlDQUEwQjs7SUFDMUIsb0NBQWtCOztJQUNsQixtQ0FBaUI7O0lBQ2pCLG1DQUMwQjs7SUFFMUIsOEJBQ29COztJQUNwQixrQ0FDaUI7O0lBQ2pCLHVDQUN5Qzs7SUFDekMscUNBQ21COztJQUNuQix1Q0FDcUI7O0lBQ3JCLG1DQUNpQjs7SUFDakIsNENBQzZCOztJQUM3Qix5Q0FDc0I7Ozs7O0lBRVYsK0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBQYW5PcHRpb25zIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCBPdmVybGF5UG9zaXRpb25pbmcgZnJvbSAnb2wvT3ZlcmxheVBvc2l0aW9uaW5nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLW92ZXJsYXknLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbXBvbmVudFR5cGUgPSAnb3ZlcmxheSc7XHJcbiAgaW5zdGFuY2U6IE92ZXJsYXk7XHJcbiAgZWxlbWVudDogRWxlbWVudDtcclxuICBAQ29udGVudENoaWxkKENvbnRlbnRDb21wb25lbnQpXHJcbiAgY29udGVudDogQ29udGVudENvbXBvbmVudDtcclxuXHJcbiAgQElucHV0KClcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgb2Zmc2V0OiBudW1iZXJbXTtcclxuICBASW5wdXQoKVxyXG4gIHBvc2l0aW9uaW5nOiBPdmVybGF5UG9zaXRpb25pbmcgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzdG9wRXZlbnQ6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBpbnNlcnRGaXJzdDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGF1dG9QYW46IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBhdXRvUGFuQW5pbWF0aW9uOiBQYW5PcHRpb25zO1xyXG4gIEBJbnB1dCgpXHJcbiAgYXV0b1Bhbk1hcmdpbjogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jb250ZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBPdmVybGF5KHRoaXMpO1xyXG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRPdmVybGF5KHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVPdmVybGF5KHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=