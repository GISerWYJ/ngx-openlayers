/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
var TileGridComponent = /** @class */ (function () {
    function TileGridComponent() {
    }
    /**
     * @return {?}
     */
    TileGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TileGridComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    };
    TileGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-tilegrid',
                    template: '',
                },] },
    ];
    TileGridComponent.propDecorators = {
        extent: [{ type: Input }],
        maxZoom: [{ type: Input }],
        minZoom: [{ type: Input }],
        tileSize: [{ type: Input }],
        origin: [{ type: Input }],
        resolutions: [{ type: Input }]
    };
    return TileGridComponent;
}());
export { TileGridComponent };
if (false) {
    /** @type {?} */
    TileGridComponent.prototype.instance;
    /** @type {?} */
    TileGridComponent.prototype.extent;
    /** @type {?} */
    TileGridComponent.prototype.maxZoom;
    /** @type {?} */
    TileGridComponent.prototype.minZoom;
    /** @type {?} */
    TileGridComponent.prototype.tileSize;
    /** @type {?} */
    TileGridComponent.prototype.origin;
    /** @type {?} */
    TileGridComponent.prototype.resolutions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvdGlsZWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLFFBQVEsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFBQTtJQW1DQSxDQUFDOzs7O0lBZkMsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVELHVDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7eUJBSUUsS0FBSzswQkFFTCxLQUFLOzBCQUVMLEtBQUs7MkJBRUwsS0FBSzt5QkFFTCxLQUFLOzhCQUVMLEtBQUs7O0lBa0JSLHdCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0EvQlksaUJBQWlCOzs7SUFDNUIscUNBQW1COztJQUVuQixtQ0FDZTs7SUFDZixvQ0FDZ0I7O0lBQ2hCLG9DQUNnQjs7SUFDaEIscUNBQ3dCOztJQUN4QixtQ0FDb0I7O0lBQ3BCLHdDQUNzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVhZWiB9IGZyb20gJ29sL3RpbGVncmlkJztcclxuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcclxuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xyXG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC10aWxlZ3JpZCcsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGlsZUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgaW5zdGFuY2U6IFRpbGVHcmlkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGV4dGVudDogRXh0ZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgbWF4Wm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWluWm9vbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGlsZVNpemU6IG51bWJlciB8IFNpemU7XHJcbiAgQElucHV0KClcclxuICBvcmlnaW4/OiBDb29yZGluYXRlO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5yZXNvbHV0aW9ucykge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gY3JlYXRlWFlaKHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlR3JpZCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICghdGhpcy5yZXNvbHV0aW9ucykge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gY3JlYXRlWFlaKHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlR3JpZCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19