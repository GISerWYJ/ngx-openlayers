/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter, } from '@angular/core';
import Map from 'ol/Map';
export class MapComponent {
    /**
     * @param {?} host
     */
    constructor(host) {
        this.host = host;
        this.componentType = 'map';
        this.width = '100%';
        this.height = '100%';
        // we pass empty arrays to not get default controls/interactions because we have our own directives
        this.controls = [];
        this.interactions = [];
        this.onClick = new EventEmitter();
        this.onDblClick = new EventEmitter();
        this.onMoveEnd = new EventEmitter();
        this.onPointerDrag = new EventEmitter();
        this.onPointerMove = new EventEmitter();
        this.onPostCompose = new EventEmitter();
        this.onPostRender = new EventEmitter();
        this.onPreCompose = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
        this.onSingleClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('creating ol.Map instance with:', this);
        this.instance = new Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onClick.emit(event)));
        this.instance.on('dblclick', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onDblClick.emit(event)));
        this.instance.on('moveend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onMoveEnd.emit(event)));
        this.instance.on('pointerdrag', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPointerDrag.emit(event)));
        this.instance.on('pointermove', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPointerMove.emit(event)));
        this.instance.on('postcompose', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPostCompose.emit(event)));
        this.instance.on('postrender', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPostRender.emit(event)));
        this.instance.on('precompose', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPreCompose.emit(event)));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPropertyChange.emit(event)));
        this.instance.on('singleclick', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onSingleClick.emit(event)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.instance.updateSize();
    }
}
MapComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-map',
                template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
MapComponent.ctorParameters = () => [
    { type: ElementRef }
];
MapComponent.propDecorators = {
    width: [{ type: Input }],
    height: [{ type: Input }],
    pixelRatio: [{ type: Input }],
    keyboardEventTarget: [{ type: Input }],
    loadTilesWhileAnimating: [{ type: Input }],
    loadTilesWhileInteracting: [{ type: Input }],
    logo: [{ type: Input }],
    renderer: [{ type: Input }],
    onClick: [{ type: Output }],
    onDblClick: [{ type: Output }],
    onMoveEnd: [{ type: Output }],
    onPointerDrag: [{ type: Output }],
    onPointerMove: [{ type: Output }],
    onPostCompose: [{ type: Output }],
    onPostRender: [{ type: Output }],
    onPreCompose: [{ type: Output }],
    onPropertyChange: [{ type: Output }],
    onSingleClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MapComponent.prototype.instance;
    /** @type {?} */
    MapComponent.prototype.componentType;
    /** @type {?} */
    MapComponent.prototype.width;
    /** @type {?} */
    MapComponent.prototype.height;
    /** @type {?} */
    MapComponent.prototype.pixelRatio;
    /** @type {?} */
    MapComponent.prototype.keyboardEventTarget;
    /** @type {?} */
    MapComponent.prototype.loadTilesWhileAnimating;
    /** @type {?} */
    MapComponent.prototype.loadTilesWhileInteracting;
    /** @type {?} */
    MapComponent.prototype.logo;
    /** @type {?} */
    MapComponent.prototype.renderer;
    /** @type {?} */
    MapComponent.prototype.onClick;
    /** @type {?} */
    MapComponent.prototype.onDblClick;
    /** @type {?} */
    MapComponent.prototype.onMoveEnd;
    /** @type {?} */
    MapComponent.prototype.onPointerDrag;
    /** @type {?} */
    MapComponent.prototype.onPointerMove;
    /** @type {?} */
    MapComponent.prototype.onPostCompose;
    /** @type {?} */
    MapComponent.prototype.onPostRender;
    /** @type {?} */
    MapComponent.prototype.onPreCompose;
    /** @type {?} */
    MapComponent.prototype.onPropertyChange;
    /** @type {?} */
    MapComponent.prototype.onSingleClick;
    /** @type {?} */
    MapComponent.prototype.controls;
    /** @type {?} */
    MapComponent.prototype.interactions;
    /**
     * @type {?}
     * @private
     */
    MapComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL21hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUliLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sR0FBRyxNQUFNLFFBQVEsQ0FBQztBQWV6QixNQUFNLE9BQU8sWUFBWTs7OztJQThDdkIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQTVDN0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHN0IsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUVmLFdBQU0sR0FBRyxNQUFNLENBQUM7O1FBb0NoQixhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUcvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElB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Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUFsR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7OztHQUdUO2FBQ0Y7Ozs7WUF0QkMsVUFBVTs7O29CQTJCVCxLQUFLO3FCQUVMLEtBQUs7eUJBRUwsS0FBSztrQ0FFTCxLQUFLO3NDQUVMLEtBQUs7d0NBRUwsS0FBSzttQkFFTCxLQUFLO3VCQUVMLEtBQUs7c0JBR0wsTUFBTTt5QkFFTixNQUFNO3dCQUVOLE1BQU07NEJBRU4sTUFBTTs0QkFFTixNQUFNOzRCQUVOLE1BQU07MkJBRU4sTUFBTTsyQkFFTixNQUFNOytCQUVOLE1BQU07NEJBRU4sTUFBTTs7OztJQXRDUCxnQ0FBcUI7O0lBQ3JCLHFDQUE2Qjs7SUFFN0IsNkJBQ2U7O0lBQ2YsOEJBQ2dCOztJQUNoQixrQ0FDbUI7O0lBQ25CLDJDQUNzQzs7SUFDdEMsK0NBQ2lDOztJQUNqQyxpREFDbUM7O0lBQ25DLDRCQUN1Qjs7SUFDdkIsZ0NBQzZCOztJQUU3QiwrQkFDdUM7O0lBQ3ZDLGtDQUMwQzs7SUFDMUMsaUNBQ2tDOztJQUNsQyxxQ0FDNkM7O0lBQzdDLHFDQUM2Qzs7SUFDN0MscUNBQ3lDOztJQUN6QyxvQ0FDcUM7O0lBQ3JDLG9DQUN3Qzs7SUFDeEMsd0NBQzRDOztJQUM1QyxxQ0FDNkM7O0lBRzdDLGdDQUF5Qjs7SUFDekIsb0NBQWlDOzs7OztJQUVyQiw0QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPbkNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBNYXAgZnJvbSAnb2wvTWFwJztcclxuaW1wb3J0IE1hcEJyb3dzZXJFdmVudCBmcm9tICdvbC9NYXBCcm93c2VyRXZlbnQnO1xyXG5pbXBvcnQgTWFwRXZlbnQgZnJvbSAnb2wvTWFwRXZlbnQnO1xyXG5pbXBvcnQgT2JqZWN0RXZlbnQgZnJvbSAnb2wvT2JqZWN0JztcclxuaW1wb3J0IFJlbmRlckV2ZW50IGZyb20gJ29sL3JlbmRlci9FdmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgSW50ZXJhY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1tYXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCI+PC9kaXY+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBwdWJsaWMgaW5zdGFuY2U6IE1hcDtcclxuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdtYXAnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHdpZHRoID0gJzEwMCUnO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0ID0gJzEwMCUnO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGl4ZWxSYXRpbzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAga2V5Ym9hcmRFdmVudFRhcmdldDogRWxlbWVudCB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxvYWRUaWxlc1doaWxlQW5pbWF0aW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgbG9hZFRpbGVzV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGxvZ286IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICByZW5kZXJlcjogJ2NhbnZhcycgfCAnd2ViZ2wnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvbkRibENsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvbk1vdmVFbmQ6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb2ludGVyRHJhZzogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb2ludGVyTW92ZTogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qb3N0Q29tcG9zZTogRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvblBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25QcmVDb21wb3NlOiBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUHJvcGVydHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25TaW5nbGVDbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XHJcblxyXG4gIC8vIHdlIHBhc3MgZW1wdHkgYXJyYXlzIHRvIG5vdCBnZXQgZGVmYXVsdCBjb250cm9scy9pbnRlcmFjdGlvbnMgYmVjYXVzZSB3ZSBoYXZlIG91ciBvd24gZGlyZWN0aXZlc1xyXG4gIGNvbnRyb2xzOiBDb250cm9sW10gPSBbXTtcclxuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLm9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcclxuICAgIHRoaXMub25EYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xyXG4gICAgdGhpcy5vbk1vdmVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xyXG4gICAgdGhpcy5vblBvaW50ZXJEcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUG9pbnRlck1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcclxuICAgIHRoaXMub25Qb3N0Q29tcG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUG9zdFJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUHJlQ29tcG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xyXG4gICAgdGhpcy5vblNpbmdsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5NYXAgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTWFwKHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRUYXJnZXQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RibGNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25EYmxDbGljay5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb3ZlZW5kJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5vbk1vdmVFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9pbnRlcmRyYWcnLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vblBvaW50ZXJEcmFnLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3BvaW50ZXJtb3ZlJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25Qb2ludGVyTW92ZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0Y29tcG9zZScsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25Qb3N0Q29tcG9zZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5vblBvc3RSZW5kZXIuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJlY29tcG9zZScsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25QcmVDb21wb3NlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5vblByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NpbmdsZWNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25TaW5nbGVDbGljay5lbWl0KGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtbWFwLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVNpemUoKTtcclxuICB9XHJcbn1cclxuIl19