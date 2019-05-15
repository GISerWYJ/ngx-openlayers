/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
export class FormatMVTComponent extends FormatComponent {
    constructor() {
        super();
        this.instance = new MVT(this);
    }
}
FormatMVTComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-format-mvt',
                template: '',
                providers: [{ provide: FormatComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FormatMVTComponent)) }],
            },] },
];
/** @nocollapse */
FormatMVTComponent.ctorParameters = () => [];
FormatMVTComponent.propDecorators = {
    featureClass: [{ type: Input }],
    geometryName: [{ type: Input }],
    layerName: [{ type: Input }],
    layers: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2Zvcm1hdHMvbXZ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBU2hDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlO0lBY3JEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLEVBQUMsRUFBRSxDQUFDO2FBQzdGOzs7OzsyQkFJRSxLQUFLOzJCQUlMLEtBQUs7d0JBRUwsS0FBSztxQkFFTCxLQUFLOzs7O0lBVk4sc0NBQWM7O0lBRWQsMENBRzJHOztJQUMzRywwQ0FDcUI7O0lBQ3JCLHVDQUNrQjs7SUFDbEIsb0NBQ2lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtYXRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1hdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNVlQgfSBmcm9tICdvbC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20nO1xyXG5pbXBvcnQgR2VvbWV0cnlUeXBlIGZyb20gJ29sL2dlb20vR2VvbWV0cnlUeXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWZvcm1hdC1tdnQnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEZvcm1hdENvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybWF0TVZUQ29tcG9uZW50KSB9XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1hdE1WVENvbXBvbmVudCBleHRlbmRzIEZvcm1hdENvbXBvbmVudCB7XHJcbiAgaW5zdGFuY2U6IE1WVDtcclxuXHJcbiAgQElucHV0KClcclxuICBmZWF0dXJlQ2xhc3M6XHJcbiAgICB8ICgoZ2VvbTogR2VvbWV0cnkgfCB7IFtrOiBzdHJpbmddOiBhbnkgfSkgPT4gYW55KVxyXG4gICAgfCAoKGdlb206IEdlb21ldHJ5VHlwZSwgYXJnMjogbnVtYmVyW10sIGFyZzM6IG51bWJlcltdIHwgbnVtYmVyW11bXSwgYXJnNDogeyBbazogc3RyaW5nXTogYW55IH0pID0+IGFueSk7XHJcbiAgQElucHV0KClcclxuICBnZW9tZXRyeU5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxheWVyTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGF5ZXJzOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNVlQodGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==