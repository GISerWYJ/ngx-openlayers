/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
import { Coordinate } from 'ol/coordinate';
var TileGridWMTSComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TileGridWMTSComponent, _super);
    function TileGridWMTSComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    TileGridWMTSComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.instance = new WMTS(this);
    };
    TileGridWMTSComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-tilegrid-wmts',
                    template: '',
                },] },
    ];
    TileGridWMTSComponent.propDecorators = {
        origin: [{ type: Input }],
        origins: [{ type: Input }],
        resolutions: [{ type: Input }],
        matrixIds: [{ type: Input }],
        sizes: [{ type: Input }],
        tileSizes: [{ type: Input }],
        widths: [{ type: Input }]
    };
    return TileGridWMTSComponent;
}(TileGridComponent));
export { TileGridWMTSComponent };
if (false) {
    /** @type {?} */
    TileGridWMTSComponent.prototype.instance;
    /** @type {?} */
    TileGridWMTSComponent.prototype.origin;
    /** @type {?} */
    TileGridWMTSComponent.prototype.origins;
    /** @type {?} */
    TileGridWMTSComponent.prototype.resolutions;
    /** @type {?} */
    TileGridWMTSComponent.prototype.matrixIds;
    /** @type {?} */
    TileGridWMTSComponent.prototype.sizes;
    /** @type {?} */
    TileGridWMTSComponent.prototype.tileSizes;
    /** @type {?} */
    TileGridWMTSComponent.prototype.widths;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWR3bXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3RpbGVncmlkd210cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLElBQUksTUFBTSxrQkFBa0IsQ0FBQztBQUNwQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBSTJDLGlEQUFpQjtJQUo1RDs7SUF5QkEsQ0FBQzs7OztJQUhDLHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsRUFBRTtpQkFDYjs7O3lCQUlFLEtBQUs7MEJBRUwsS0FBSzs4QkFFTCxLQUFLOzRCQUVMLEtBQUs7d0JBRUwsS0FBSzs0QkFFTCxLQUFLO3lCQUVMLEtBQUs7O0lBTVIsNEJBQUM7Q0FBQSxBQXpCRCxDQUkyQyxpQkFBaUIsR0FxQjNEO1NBckJZLHFCQUFxQjs7O0lBQ2hDLHlDQUFlOztJQUVmLHVDQUNvQjs7SUFDcEIsd0NBQ3VCOztJQUN2Qiw0Q0FDc0I7O0lBQ3RCLDBDQUNvQjs7SUFDcEIsc0NBQ2U7O0lBQ2YsMENBQzhCOztJQUM5Qix1Q0FDa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IFdNVFMgZnJvbSAnb2wvdGlsZWdyaWQvV01UUyc7XHJcbmltcG9ydCB7IFRpbGVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi90aWxlZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLXRpbGVncmlkLXdtdHMnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbGVHcmlkV01UU0NvbXBvbmVudCBleHRlbmRzIFRpbGVHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpbnN0YW5jZTogV01UUztcclxuXHJcbiAgQElucHV0KClcclxuICBvcmlnaW4/OiBDb29yZGluYXRlO1xyXG4gIEBJbnB1dCgpXHJcbiAgb3JpZ2lucz86IENvb3JkaW5hdGVbXTtcclxuICBASW5wdXQoKVxyXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcclxuICBASW5wdXQoKVxyXG4gIG1hdHJpeElkczogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICBzaXplcz86IFNpemVbXTtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVTaXplcz86IChudW1iZXIgfCBTaXplKVtdO1xyXG4gIEBJbnB1dCgpXHJcbiAgd2lkdGhzPzogbnVtYmVyW107XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBXTVRTKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXX0=