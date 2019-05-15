/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
export class TileGridComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvdGlsZWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLFFBQVEsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsTUFBTSxPQUFPLGlCQUFpQjs7OztJQWdCNUIsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsRUFBRTthQUNiOzs7cUJBSUUsS0FBSztzQkFFTCxLQUFLO3NCQUVMLEtBQUs7dUJBRUwsS0FBSztxQkFFTCxLQUFLOzBCQUVMLEtBQUs7Ozs7SUFaTixxQ0FBbUI7O0lBRW5CLG1DQUNlOztJQUNmLG9DQUNnQjs7SUFDaEIsb0NBQ2dCOztJQUNoQixxQ0FDd0I7O0lBQ3hCLG1DQUNvQjs7SUFDcEIsd0NBQ3NCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY3JlYXRlWFlaIH0gZnJvbSAnb2wvdGlsZWdyaWQnO1xyXG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xyXG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXRpbGVncmlkJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBpbnN0YW5jZTogVGlsZUdyaWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZXh0ZW50OiBFeHRlbnQ7XHJcbiAgQElucHV0KClcclxuICBtYXhab29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtaW5ab29tOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0aWxlU2l6ZTogbnVtYmVyIHwgU2l6ZTtcclxuICBASW5wdXQoKVxyXG4gIG9yaWdpbj86IENvb3JkaW5hdGU7XHJcbiAgQElucHV0KClcclxuICByZXNvbHV0aW9uczogbnVtYmVyW107XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnJlc29sdXRpb25zKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBjcmVhdGVYWVoodGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVHcmlkKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKCF0aGlzLnJlc29sdXRpb25zKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBjcmVhdGVYWVoodGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVHcmlkKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=