/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
var FormatMVTComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormatMVTComponent, _super);
    function FormatMVTComponent() {
        var _this = _super.call(this) || this;
        _this.instance = new MVT(_this);
        return _this;
    }
    FormatMVTComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-format-mvt',
                    template: '',
                    providers: [{ provide: FormatComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FormatMVTComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    FormatMVTComponent.ctorParameters = function () { return []; };
    FormatMVTComponent.propDecorators = {
        featureClass: [{ type: Input }],
        geometryName: [{ type: Input }],
        layerName: [{ type: Input }],
        layers: [{ type: Input }]
    };
    return FormatMVTComponent;
}(FormatComponent));
export { FormatMVTComponent };
if (false) {
    /** @type {?} */
    FormatMVTComponent.prototype.instance;
    /** @type {?} */
    FormatMVTComponent.prototype.featureClass;
    /** @type {?} */
    FormatMVTComponent.prototype.geometryName;
    /** @type {?} */
    FormatMVTComponent.prototype.layerName;
    /** @type {?} */
    FormatMVTComponent.prototype.layers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2Zvcm1hdHMvbXZ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUloQztJQUt3Qyw4Q0FBZTtJQWNyRDtRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQ2hDLENBQUM7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixFQUFDLEVBQUUsQ0FBQztpQkFDN0Y7Ozs7OytCQUlFLEtBQUs7K0JBSUwsS0FBSzs0QkFFTCxLQUFLO3lCQUVMLEtBQUs7O0lBT1IseUJBQUM7Q0FBQSxBQXZCRCxDQUt3QyxlQUFlLEdBa0J0RDtTQWxCWSxrQkFBa0I7OztJQUM3QixzQ0FBYzs7SUFFZCwwQ0FHMkc7O0lBQzNHLDBDQUNxQjs7SUFDckIsdUNBQ2tCOztJQUNsQixvQ0FDaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1hdENvbXBvbmVudCB9IGZyb20gJy4vZm9ybWF0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1WVCB9IGZyb20gJ29sL2Zvcm1hdCc7XHJcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbSc7XHJcbmltcG9ydCBHZW9tZXRyeVR5cGUgZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeVR5cGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtZm9ybWF0LW12dCcsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogRm9ybWF0Q29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtYXRNVlRDb21wb25lbnQpIH1dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWF0TVZUQ29tcG9uZW50IGV4dGVuZHMgRm9ybWF0Q29tcG9uZW50IHtcclxuICBpbnN0YW5jZTogTVZUO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGZlYXR1cmVDbGFzczpcclxuICAgIHwgKChnZW9tOiBHZW9tZXRyeSB8IHsgW2s6IHN0cmluZ106IGFueSB9KSA9PiBhbnkpXHJcbiAgICB8ICgoZ2VvbTogR2VvbWV0cnlUeXBlLCBhcmcyOiBudW1iZXJbXSwgYXJnMzogbnVtYmVyW10gfCBudW1iZXJbXVtdLCBhcmc0OiB7IFtrOiBzdHJpbmddOiBhbnkgfSkgPT4gYW55KTtcclxuICBASW5wdXQoKVxyXG4gIGdlb21ldHJ5TmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGF5ZXJOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYXllcnM6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1WVCh0aGlzKTtcclxuICB9XHJcbn1cclxuIl19