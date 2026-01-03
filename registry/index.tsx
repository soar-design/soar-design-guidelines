import * as React from "react";
import dynamic from "next/dynamic";

import AccordionDemo from "./accordion/demo";
import AccordionDemoRtl from "./accordion/demo-rtl";
import AccordionSingle from "./accordion/single";
import AccordionMultiple from "./accordion/multiple";
import AccordionVariants from "./accordion/variants";
import AccordionIndicators from "./accordion/indicators";
import AccordionIndicator from "./accordion/indicator";
import AccordionOutline from "./accordion/outline";
import AccordionOutlineRtl from "./accordion/outline-rtl";
import AccordionSolid from "./accordion/solid";
import AccordionSolidRtl from "./accordion/solid-rtl";
import AccordionIndicatorRtl from "./accordion/indicator-rtl";
import AccordionNested from "./accordion/nested";
import AccordionNestedRtl from "./accordion/nested-rtl";
import AccordionDisabled from "./accordion/disabled";
import AccordionControlled from "./accordion/controlled";
import AccordionDefaultValue from "./accordion/default-value";
import AccordionDisabledRoot from "./accordion/disabled-root";
import AccordionComplexContent from "./accordion/complex-content";
import AccordionFAQ from "./accordion/faq";
import AccordionInCard from "./accordion/in-card";

import AlertDemo from "./alert/demo";
import AlertDemoRtl from "./alert/demo-rtl";
import AlertSolid from "./alert/solid";
import AlertSolidRtl from "./alert/solid-rtl";
import AlertMono from "./alert/mono";
import AlertMonoRtl from "./alert/mono-rtl";
import AlertOutline from "./alert/outline";
import AlertOutlineRtl from "./alert/outline-rtl";
import AlertLight from "./alert/light";
import AlertLightRtl from "./alert/light-rtl";
import AlertSize from "./alert/size";
import AlertSizeRtl from "./alert/size-rtl";
import AlertExtended from "./alert/extended";
import AlertExtendedRtl from "./alert/extended-rtl";
import AlertActions from "./alert/actions";
import AlertActionsRtl from "./alert/actions-rtl";

import AlertDialogDemo from "./alert-dialog/demo";
import AlertDialogDemoRtl from "./alert-dialog/demo-rtl";
import AlertDialogDestructive from "./alert-dialog/destructive";
import AlertDialogDestructiveRtl from "./alert-dialog/destructive-rtl";
import AlertDialogSimple from "./alert-dialog/simple";
import AlertDialogSimpleRtl from "./alert-dialog/simple-rtl";
import AlertDialogVariants from "./alert-dialog/variants";
import AlertDialogVariantsRtl from "./alert-dialog/variants-rtl";
import AlertDialogCustomActions from "./alert-dialog/custom-actions";
import AlertDialogCustomActionsRtl from "./alert-dialog/custom-actions-rtl";

import AvatarDemo from "./avatar/demo";
import AvatarDemoRtl from "./avatar/demo-rtl";
import AvatarFallbackDemo from "./avatar/fallback";
import AvatarFallbackDemoRtl from "./avatar/fallback-rtl";
import AvatarStatusDemo from "./avatar/status";
import AvatarStatusDemoRtl from "./avatar/status-rtl";
import AvatarIndicatorDemo from "./avatar/indicator";
import AvatarIndicatorDemoRtl from "./avatar/indicator-rtl";
import AvatarBadge from "./avatar/badge";
import AvatarBadgeRtl from "./avatar/badge-rtl";
import AvatarGroup from "./avatar/group";
import AvatarGroupRtl from "./avatar/group-rtl";
import AvatarSizes from "./avatar/sizes";
import AvatarSizesRtl from "./avatar/sizes-rtl";
import AvatarUsers from "./avatar/users";
import AvatarUsersRtl from "./avatar/users-rtl";

import BadgeDemo from "./badge/demo";
import BadgeDemoRtl from "./badge/demo-rtl";
import BadgeLight from "./badge/light";
import BadgeLightRtl from "./badge/light-rtl";
import BadgeOutline from "./badge/outline";
import BadgeOutlineRtl from "./badge/outline-rtl";
import BadgeVariants from "./badge/variants";
import BadgeVariantsRtl from "./badge/variants-rtl";
import BadgeAppearances from "./badge/appearances";
import BadgeAppearancesRtl from "./badge/appearances-rtl";
import BadgeSizes from "./badge/sizes";
import BadgeSizesRtl from "./badge/sizes-rtl";
import BadgeShapes from "./badge/shapes";
import BadgeShapesRtl from "./badge/shapes-rtl";
import BadgeWithDot from "./badge/with-dot";
import BadgeWithDotRtl from "./badge/with-dot-rtl";
import BadgeWithIcon from "./badge/with-icon";
import BadgeWithIconRtl from "./badge/with-icon-rtl";
import BadgeRemoveButton from "./badge/remove-button";
import BadgeRemoveButtonRtl from "./badge/remove-button-rtl";
import BadgeSquare from "./badge/square";
import BadgeSquareRtl from "./badge/square-rtl";
import BadgeAsChild from "./badge/as-child";
import BadgeAsChildRtl from "./badge/as-child-rtl";
import BadgeButtonDemo from "./badge/button";
import BadgeButtonDemoRtl from "./badge/button-rtl";
import BadgeDisabled from "./badge/disabled";
import BadgeDisabledRtl from "./badge/disabled-rtl";

import BreadcrumbDemo from "./breadcrumb/demo";
import BreadcrumbDemoRtl from "./breadcrumb/demo-rtl";
import BreadcrumbIcon from "./breadcrumb/icon";
import BreadcrumbIconRtl from "./breadcrumb/icon-rtl";
import BreadcrumbSeparator from "./breadcrumb/separator";
import BreadcrumbSeparatorRtl from "./breadcrumb/separator-rtl";
import BreadcrumbDropdown from "./breadcrumb/dropdown";
import BreadcrumbDropdownRtl from "./breadcrumb/dropdown-rtl";
import BreadcrumbCard from "./breadcrumb/card";
import BreadcrumbCardRtl from "./breadcrumb/card-rtl";

import CalendarDemo from "./calendar/demo";
import CalendarDemoRtl from "./calendar/demo-rtl";
import CalendarRange from "./calendar/range";
import CalendarRangeRtl from "./calendar/range-rtl";
import CalendarMultiple from "./calendar/multiple";
import CalendarMultipleRtl from "./calendar/multiple-rtl";
import CalendarDisabled from "./calendar/disabled";
import CalendarDisabledRtl from "./calendar/disabled-rtl";
import CalendarShowOutsideDays from "./calendar/show-outside-days";
import CalendarShowOutsideDaysRtl from "./calendar/show-outside-days-rtl";

import CardDemo from "./card/demo";
import CardDemoRtl from "./card/demo-rtl";
import CardAccent from "./card/accent";
import CardAccentRtl from "./card/accent-rtl";
import CardVariants from "./card/variants";
import CardVariantsRtl from "./card/variants-rtl";
import CardWithToolbar from "./card/with-toolbar";
import CardWithToolbarRtl from "./card/with-toolbar-rtl";
import CardWithTable from "./card/with-table";
import CardWithTableRtl from "./card/with-table-rtl";
import CardSimple from "./card/simple";
import CardSimpleRtl from "./card/simple-rtl";
import CardWithForm from "./card/with-form";
import CardWithFormRtl from "./card/with-form-rtl";

import CarouselDemo from "./carousel/demo";
import CarouselDemoRtl from "./carousel/demo-rtl";
import CarouselSizes from "./carousel/sizes";
import CarouselSizesRtl from "./carousel/sizes-rtl";
import CarouselSpacing from "./carousel/spacing";
import CarouselSpacingRtl from "./carousel/spacing-rtl";
import CarouselOrientation from "./carousel/orientation";
import CarouselOrientationRtl from "./carousel/orientation-rtl";
import CarouselApi from "./carousel/api";
import CarouselApiRtl from "./carousel/api-rtl";
import CarouselPlugin from "./carousel/plugin";
import CarouselPluginRtl from "./carousel/plugin-rtl";

import ChartDemo from "./chart/demo";
import ChartLine from "./chart/line";
import ChartLine1 from "./chart/line-1";
import ChartLine2 from "./chart/line-2";
import ChartLine3 from "./chart/line-3";
import ChartLine4 from "./chart/line-4";
import ChartLine5 from "./chart/line-5";
import ChartLine6 from "./chart/line-6";
import ChartLine7 from "./chart/line-7";
import ChartLine8 from "./chart/line-8";
import ChartArea from "./chart/area";
import ChartArea1 from "./chart/area-1";
import ChartArea2 from "./chart/area-2";
import ChartArea3 from "./chart/area-3";
import ChartArea4 from "./chart/area-4";
import ChartArea5 from "./chart/area-5";
import ChartPie from "./chart/pie";
import ChartWithLegend from "./chart/with-legend";
import ChartDemoRtl from "./chart/demo-rtl";
import ChartLineRtl from "./chart/line-rtl";
import ChartLine1Rtl from "./chart/line-1-rtl";
import ChartLine2Rtl from "./chart/line-2-rtl";
import ChartLine3Rtl from "./chart/line-3-rtl";
import ChartLine4Rtl from "./chart/line-4-rtl";
import ChartLine5Rtl from "./chart/line-5-rtl";
import ChartLine6Rtl from "./chart/line-6-rtl";
import ChartLine7Rtl from "./chart/line-7-rtl";
import ChartLine8Rtl from "./chart/line-8-rtl";
import ChartAreaRtl from "./chart/area-rtl";
import ChartArea1Rtl from "./chart/area-1-rtl";
import ChartArea2Rtl from "./chart/area-2-rtl";
import ChartArea3Rtl from "./chart/area-3-rtl";
import ChartArea4Rtl from "./chart/area-4-rtl";
import ChartArea5Rtl from "./chart/area-5-rtl";
import ChartPieRtl from "./chart/pie-rtl";
import ChartWithLegendRtl from "./chart/with-legend-rtl";

import CheckboxDemo from "./checkbox/demo";
import CheckboxDemoRtl from "./checkbox/demo-rtl";
import CheckboxChecked from "./checkbox/checked";
import CheckboxCheckedRtl from "./checkbox/checked-rtl";
import CheckboxDisabled from "./checkbox/disabled";
import CheckboxDisabledRtl from "./checkbox/disabled-rtl";
import CheckboxIndeterminate from "./checkbox/indeterminate";
import CheckboxIndeterminateRtl from "./checkbox/indeterminate-rtl";
import CheckboxSizes from "./checkbox/sizes";
import CheckboxSizesRtl from "./checkbox/sizes-rtl";
import CheckboxForm from "./checkbox/form";
import CheckboxFormRtl from "./checkbox/form-rtl";
import CheckboxWithText from "./checkbox/with-text";
import CheckboxWithTextRtl from "./checkbox/with-text-rtl";

import CollapsibleDemo from "./collapsible/demo";
import CollapsibleDemoRtl from "./collapsible/demo-rtl";
import CollapsibleCard from "./collapsible/card";
import CollapsibleCardRtl from "./collapsible/card-rtl";
import CollapsibleMultiple from "./collapsible/multiple";
import CollapsibleMultipleRtl from "./collapsible/multiple-rtl";
import CollapsibleSimple from "./collapsible/simple";
import CollapsibleSimpleRtl from "./collapsible/simple-rtl";
import CollapsibleWithIcon from "./collapsible/with-icon";
import CollapsibleWithIconRtl from "./collapsible/with-icon-rtl";

import CommandDemo from "./command/demo";
import CommandDemoRtl from "./command/demo-rtl";
import CommandDialogDemo from "./command/dialog";
import CommandDialogDemoRtl from "./command/dialog-rtl";
import CommandWithGroups from "./command/with-groups";
import CommandWithGroupsRtl from "./command/with-groups-rtl";
import CommandWithShortcuts from "./command/with-shortcuts";
import CommandWithShortcutsRtl from "./command/with-shortcuts-rtl";

import ContextMenuDemo from "./context-menu/demo";
import ContextMenuDemoRtl from "./context-menu/demo-rtl";
import ContextMenuWithIcons from "./context-menu/with-icons";
import ContextMenuWithIconsRtl from "./context-menu/with-icons-rtl";
import ContextMenuWithCheckbox from "./context-menu/with-checkbox";
import ContextMenuWithCheckboxRtl from "./context-menu/with-checkbox-rtl";
import ContextMenuWithRadio from "./context-menu/with-radio";
import ContextMenuWithRadioRtl from "./context-menu/with-radio-rtl";
import ContextMenuWithSubmenu from "./context-menu/with-submenu";
import ContextMenuWithSubmenuRtl from "./context-menu/with-submenu-rtl";

import DatePickerDemo from "./date-picker/demo";
import DatePickerDemoRtl from "./date-picker/demo-rtl";
import DatePickerDateTime from "./date-picker/date-time";
import DatePickerDateTimeRtl from "./date-picker/date-time-rtl";
import DatePickerRange from "./date-picker/range";
import DatePickerRangeRtl from "./date-picker/range-rtl";
import DatePickerPresets from "./date-picker/presets";
import DatePickerPresetsRtl from "./date-picker/presets-rtl";
import DatePickerForm from "./date-picker/form";
import DatePickerFormRtl from "./date-picker/form-rtl";

import CountingNumberDemo from "./counting-number/demo";
import CountingNumberDemoRtl from "./counting-number/demo-rtl";
import CountingNumberDecimal from "./counting-number/decimal";
import CountingNumberDecimalRtl from "./counting-number/decimal-rtl";
import CountingNumberFormat from "./counting-number/format";
import CountingNumberFormatRtl from "./counting-number/format-rtl";
import CountingNumberDurationDelay from "./counting-number/duration-delay";
import CountingNumberDurationDelayRtl from "./counting-number/duration-delay-rtl";
import CountingNumberFormats from "./counting-number/formats";
import CountingNumberFormatsRtl from "./counting-number/formats-rtl";
import CountingNumberStartOnView from "./counting-number/start-on-view";
import CountingNumberStartOnViewRtl from "./counting-number/start-on-view-rtl";
import CountingNumberStatsCards from "./counting-number/stats-cards";
import CountingNumberStatsCardsRtl from "./counting-number/stats-cards-rtl";

import DataGridDemo from "./data-grid/demo";
import DataGridDemoRtl from "./data-grid/demo-rtl";
import DataGridCellBorder from "./data-grid/cell-border";
import DataGridCellBorderRtl from "./data-grid/cell-border-rtl";
import DataGridDense from "./data-grid/dense";
import DataGridDenseRtl from "./data-grid/dense-rtl";
import DataGridLight from "./data-grid/light";
import DataGridLightRtl from "./data-grid/light-rtl";
import DataGridStripped from "./data-grid/stripped";
import DataGridStrippedRtl from "./data-grid/stripped-rtl";
import DataGridAutoWidth from "./data-grid/auto-width";
import DataGridAutoWidthRtl from "./data-grid/auto-width-rtl";
import DataGridRowSelection from "./data-grid/row-selection";
import DataGridRowSelectionRtl from "./data-grid/row-selection-rtl";
import DataGridExpandableRow from "./data-grid/expandable-row";
import DataGridExpandableRowRtl from "./data-grid/expandable-row-rtl";
import DataGridSubDataGrid from "./data-grid/sub-data-grid";
import DataGridSubDataGridRtl from "./data-grid/sub-data-grid-rtl";
import DataGridColumnIcons from "./data-grid/column-icons";
import DataGridColumnIconsRtl from "./data-grid/column-icons-rtl";
import DataGridSortableColumns from "./data-grid/sortable-columns";
import DataGridSortableColumnsRtl from "./data-grid/sortable-columns-rtl";
import DataGridMovableColumns from "./data-grid/movable-columns";
import DataGridMovableColumnsRtl from "./data-grid/movable-columns-rtl";
import DataGridDraggableColumns from "./data-grid/draggable-columns";
import DataGridDraggableColumnsRtl from "./data-grid/draggable-columns-rtl";
import DataGridDraggableRows from "./data-grid/draggable-rows";
import DataGridDraggableRowsRtl from "./data-grid/draggable-rows-rtl";
import DataGridResizableColumns from "./data-grid/resizable-columns";
import DataGridResizableColumnsRtl from "./data-grid/resizable-columns-rtl";
import DataGridPinnableColumns from "./data-grid/pinnable-columns";
import DataGridPinnableColumnsRtl from "./data-grid/pinnable-columns-rtl";
import DataGridStickyHeader from "./data-grid/sticky-header";
import DataGridStickyHeaderRtl from "./data-grid/sticky-header-rtl";
import DataGridColumnControls from "./data-grid/column-controls";
import DataGridColumnControlsRtl from "./data-grid/column-controls-rtl";
import DataGridCard from "./data-grid/card";
import DataGridCardRtl from "./data-grid/card-rtl";
import DataGridColumnsVisibility from "./data-grid/columns-visibility";
import DataGridColumnsVisibilityRtl from "./data-grid/columns-visibility-rtl";
import DataGridSkeleton from "./data-grid/skeleton";
import DataGridSkeletonRtl from "./data-grid/skeleton-rtl";
import DataGridCrud from "./data-grid/crud";
import DataGridCrudRtl from "./data-grid/crud-rtl";
import DataGridWithSorting from "./data-grid/with-sorting";
import DataGridWithSortingRtl from "./data-grid/with-sorting-rtl";
import DataGridWithPagination from "./data-grid/with-pagination";
import DataGridWithPaginationRtl from "./data-grid/with-pagination-rtl";
import DataGridWithSelection from "./data-grid/with-selection";
import DataGridWithSelectionRtl from "./data-grid/with-selection-rtl";
import DataGridWithFiltering from "./data-grid/with-filtering";
import DataGridWithFilteringRtl from "./data-grid/with-filtering-rtl";
import DataGridLoadingStates from "./data-grid/loading-states";
import DataGridLoadingStatesRtl from "./data-grid/loading-states-rtl";
import DataGridCustomStyling from "./data-grid/custom-styling";
import DataGridCustomStylingRtl from "./data-grid/custom-styling-rtl";

import DialogDemo from "./dialog/demo";
import DialogDemoRtl from "./dialog/demo-rtl";
import DialogFullscreen from "./dialog/fullscreen";
import DialogFullscreenRtl from "./dialog/fullscreen-rtl";
import DialogWithForm from "./dialog/with-form";
import DialogWithFormRtl from "./dialog/with-form-rtl";
import DialogScrollable from "./dialog/scrollable";
import DialogScrollableRtl from "./dialog/scrollable-rtl";
import DialogNoCloseButton from "./dialog/no-close-button";
import DialogNoCloseButtonRtl from "./dialog/no-close-button-rtl";
import DialogCustomTrigger from "./dialog/custom-trigger";
import DialogCustomTriggerRtl from "./dialog/custom-trigger-rtl";
import DialogNoOverlay from "./dialog/no-overlay";
import DialogNoOverlayRtl from "./dialog/no-overlay-rtl";

import DrawerDemo from "./drawer/demo";
import DrawerDemoRtl from "./drawer/demo-rtl";
import DrawerWithForm from "./drawer/with-form";
import DrawerWithFormRtl from "./drawer/with-form-rtl";
import DrawerScrollable from "./drawer/scrollable";
import DrawerScrollableRtl from "./drawer/scrollable-rtl";
import DrawerScaleBackground from "./drawer/scale-background";
import DrawerScaleBackgroundRtl from "./drawer/scale-background-rtl";
import DrawerWithActions from "./drawer/with-actions";
import DrawerWithActionsRtl from "./drawer/with-actions-rtl";
import DrawerCustomHandle from "./drawer/custom-handle";
import DrawerCustomHandleRtl from "./drawer/custom-handle-rtl";

import DropdownMenuDemo from "./dropdown-menu/demo";
import DropdownMenuDemoRtl from "./dropdown-menu/demo-rtl";
import DropdownMenuWithIcons from "./dropdown-menu/with-icons";
import DropdownMenuWithIconsRtl from "./dropdown-menu/with-icons-rtl";
import DropdownMenuWithCheckboxes from "./dropdown-menu/with-checkboxes";
import DropdownMenuWithCheckboxesRtl from "./dropdown-menu/with-checkboxes-rtl";
import DropdownMenuWithRadio from "./dropdown-menu/with-radio";
import DropdownMenuWithRadioRtl from "./dropdown-menu/with-radio-rtl";
import DropdownMenuWithSubmenu from "./dropdown-menu/with-submenu";
import DropdownMenuWithSubmenuRtl from "./dropdown-menu/with-submenu-rtl";
import DropdownMenuDestructive from "./dropdown-menu/destructive";
import DropdownMenuDestructiveRtl from "./dropdown-menu/destructive-rtl";

import FormDemo from "./form/demo";
import FormDemoRtl from "./form/demo-rtl";
import FormWithSelect from "./form/with-select";
import FormWithSelectRtl from "./form/with-select-rtl";
import FormWithCheckbox from "./form/with-checkbox";
import FormWithCheckboxRtl from "./form/with-checkbox-rtl";
import FormWithTextarea from "./form/with-textarea";
import FormWithTextareaRtl from "./form/with-textarea-rtl";
import FormWithSwitch from "./form/with-switch";
import FormWithSwitchRtl from "./form/with-switch-rtl";
import FormNestedFields from "./form/nested-fields";
import FormNestedFieldsRtl from "./form/nested-fields-rtl";

import HoverCardDemo from "./hover-card/demo";
import HoverCardDemoRtl from "./hover-card/demo-rtl";
import HoverCardSides from "./hover-card/sides";
import HoverCardSidesRtl from "./hover-card/sides-rtl";
import HoverCardAlign from "./hover-card/align";
import HoverCardAlignRtl from "./hover-card/align-rtl";
import HoverCardWithDelay from "./hover-card/with-delay";
import HoverCardWithDelayRtl from "./hover-card/with-delay-rtl";
import HoverCardUserProfile from "./hover-card/user-profile";
import HoverCardUserProfileRtl from "./hover-card/user-profile-rtl";
import HoverCardControlled from "./hover-card/controlled";
import HoverCardControlledRtl from "./hover-card/controlled-rtl";

import InputDemo from "./input/demo";
import InputDemoRtl from "./input/demo-rtl";
import InputTypes from "./input/types";
import InputTypesRtl from "./input/types-rtl";
import InputSize from "./input/size";
import InputSizeRtl from "./input/size-rtl";
import InputDisabled from "./input/disabled";
import InputDisabledRtl from "./input/disabled-rtl";
import InputReadonly from "./input/readonly";
import InputReadonlyRtl from "./input/readonly-rtl";
// Temporarily disabled until missing components are added to Soar DS package
// import InputAddonDemo from "./input/addon";
import InputFile from "./input/file";
import InputFileRtl from "./input/file-rtl";
// import InputDate from "./input/date";
// import InputTime from "./input/time";
// import InputDateTime from "./input/date-time";
// import InputCopyToClipboard from "./input/copy-to-clipboard";
// import InputClearButton from "./input/clear-button";
import InputForm from "./input/form";
import InputFormRtl from "./input/form-rtl";
import InputWithLabel from "./input/with-label";
import InputWithLabelRtl from "./input/with-label-rtl";
import InputWithButton from "./input/with-button";
import InputWithButtonRtl from "./input/with-button-rtl";
// import InputIcon from "./input/icon";


import KbdDemo from "./kbd/demo";
import KbdDemoRtl from "./kbd/demo-rtl";
import KbdTooltip from "./kbd/tooltip";
import KbdTooltipRtl from "./kbd/tooltip-rtl";
import KbdWithGroup from "./kbd/with-group";
import KbdWithGroupRtl from "./kbd/with-group-rtl";
import KbdKeyTypes from "./kbd/key-types";
import KbdKeyTypesRtl from "./kbd/key-types-rtl";
import KbdShortcuts from "./kbd/shortcuts";
import KbdShortcutsRtl from "./kbd/shortcuts-rtl";
import KbdInText from "./kbd/in-text";
import KbdInTextRtl from "./kbd/in-text-rtl";
import KbdMenuItems from "./kbd/menu-items";
import KbdMenuItemsRtl from "./kbd/menu-items-rtl";
import KbdFunctionKeys from "./kbd/function-keys";
import KbdFunctionKeysRtl from "./kbd/function-keys-rtl";

import LabelDemo from "./label/demo";
import LabelDemoRtl from "./label/demo-rtl";
import LabelVariants from "./label/variants";
import LabelVariantsRtl from "./label/variants-rtl";
import LabelRequired from "./label/required";
import LabelRequiredRtl from "./label/required-rtl";
import LabelWithCheckbox from "./label/with-checkbox";
import LabelWithCheckboxRtl from "./label/with-checkbox-rtl";
import LabelWithHelperText from "./label/with-helper-text";
import LabelWithHelperTextRtl from "./label/with-helper-text-rtl";
import LabelDisabled from "./label/disabled";
import LabelDisabledRtl from "./label/disabled-rtl";
import LabelComplexForm from "./label/complex-form";
import LabelComplexFormRtl from "./label/complex-form-rtl";

import MenubarDemo from "./menubar/demo";
import MenubarDemoRtl from "./menubar/demo-rtl";
import MenubarWithCheckboxes from "./menubar/with-checkboxes";
import MenubarWithCheckboxesRtl from "./menubar/with-checkboxes-rtl";
import MenubarWithRadio from "./menubar/with-radio";
import MenubarWithRadioRtl from "./menubar/with-radio-rtl";
import MenubarWithIcons from "./menubar/with-icons";
import MenubarWithIconsRtl from "./menubar/with-icons-rtl";
import MenubarWithSubmenu from "./menubar/with-submenu";
import MenubarWithSubmenuRtl from "./menubar/with-submenu-rtl";

import NavigationMenuDemo from "./navigation-menu/demo";
import NavigationMenuDemoRtl from "./navigation-menu/demo-rtl";
import NavigationMenuNoViewport from "./navigation-menu/no-viewport";
import NavigationMenuNoViewportRtl from "./navigation-menu/no-viewport-rtl";
import NavigationMenuWithIndicator from "./navigation-menu/with-indicator";
import NavigationMenuWithIndicatorRtl from "./navigation-menu/with-indicator-rtl";
import NavigationMenuSimple from "./navigation-menu/simple";
import NavigationMenuSimpleRtl from "./navigation-menu/simple-rtl";

import PaginationDemo from "./pagination/demo";
import PaginationDemoRtl from "./pagination/demo-rtl";
import PaginationIcon from "./pagination/icon";
import PaginationIconRtl from "./pagination/icon-rtl";
import PaginationCard from "./pagination/card";
import PaginationCardRtl from "./pagination/card-rtl";
import PaginationSimple from "./pagination/simple";
import PaginationSimpleRtl from "./pagination/simple-rtl";
import PaginationWithLinks from "./pagination/with-links";
import PaginationWithLinksRtl from "./pagination/with-links-rtl";
import PaginationWithText from "./pagination/with-text";
import PaginationWithTextRtl from "./pagination/with-text-rtl";
import PaginationControlled from "./pagination/controlled";
import PaginationControlledRtl from "./pagination/controlled-rtl";

import PopoverDemo from "./popover/demo";
import PopoverDemoRtl from "./popover/demo-rtl";
import PopoverWithForm from "./popover/with-form";
import PopoverWithFormRtl from "./popover/with-form-rtl";
import PopoverWithAnchor from "./popover/with-anchor";
import PopoverWithAnchorRtl from "./popover/with-anchor-rtl";
import PopoverPlacement from "./popover/placement";
import PopoverPlacementRtl from "./popover/placement-rtl";
import PopoverControlled from "./popover/controlled";
import PopoverControlledRtl from "./popover/controlled-rtl";

import ProgressDemo from "./progress/demo";
import ProgressDemoRtl from "./progress/demo-rtl";
import ProgressStatus from "./progress/status";
import ProgressStatusRtl from "./progress/status-rtl";
import ProgressCircle from "./progress/circle";
import ProgressCircleRtl from "./progress/circle-rtl";
import ProgressRadial from "./progress/radial";
import ProgressRadialRtl from "./progress/radial-rtl";
import ProgressSpinner from "./progress/spinner";
import ProgressSpinnerRtl from "./progress/spinner-rtl";
import ProgressSizes from "./progress/sizes";
import ProgressSizesRtl from "./progress/sizes-rtl";
import ProgressColors from "./progress/colors";
import ProgressColorsRtl from "./progress/colors-rtl";
import ProgressAnimated from "./progress/animated";
import ProgressAnimatedRtl from "./progress/animated-rtl";

import ProgressCircleDemo from "./progress-circle/demo";
import ProgressCircleWithLabel from "./progress-circle/with-label";
import ProgressCircleSizes from "./progress-circle/sizes";
import ProgressCircleColors from "./progress-circle/colors";

import ProgressRadialDemo from "./progress-radial/demo";
import ProgressRadialGauge from "./progress-radial/gauge";
import ProgressRadialCustomContent from "./progress-radial/custom-content";

import RadioGroupDemo from "./radio-group/demo";
import RadioGroupDemoRtl from "./radio-group/demo-rtl";
import RadioGroupSizes from "./radio-group/sizes";
import RadioGroupSizesRtl from "./radio-group/sizes-rtl";
import RadioGroupDisabled from "./radio-group/disabled";
import RadioGroupDisabledRtl from "./radio-group/disabled-rtl";
import RadioGroupWithDescriptions from "./radio-group/with-descriptions";
import RadioGroupWithDescriptionsRtl from "./radio-group/with-descriptions-rtl";
import RadioGroupWithCards from "./radio-group/with-cards";
import RadioGroupWithCardsRtl from "./radio-group/with-cards-rtl";
import RadioGroupForm from "./radio-group/form";
import RadioGroupFormRtl from "./radio-group/form-rtl";

import RatingDemo from "./rating/demo";
import RatingDemoRtl from "./rating/demo-rtl";
import RatingSizes from "./rating/sizes";
import RatingSizesRtl from "./rating/sizes-rtl";
import RatingPartial from "./rating/partial";
import RatingPartialRtl from "./rating/partial-rtl";
import RatingEditable from "./rating/editable";
import RatingEditableRtl from "./rating/editable-rtl";
import RatingMaxRating from "./rating/max-rating";
import RatingMaxRatingRtl from "./rating/max-rating-rtl";
import RatingReadOnly from "./rating/read-only";
import RatingReadOnlyRtl from "./rating/read-only-rtl";
import RatingShowValue from "./rating/show-value";
import RatingShowValueRtl from "./rating/show-value-rtl";
import RatingStatistics from "./rating/statistics";
import RatingStatisticsRtl from "./rating/statistics-rtl";

import ResizableDemo from "./resizable/demo";
import ResizableDemoRtl from "./resizable/demo-rtl";
import ResizableVertical from "./resizable/vertical";
import ResizableVerticalRtl from "./resizable/vertical-rtl";
import ResizableHandle from "./resizable/handle";
import ResizableHandleRtl from "./resizable/handle-rtl";
import ResizableNested from "./resizable/nested";
import ResizableNestedRtl from "./resizable/nested-rtl";
import ResizableMinMax from "./resizable/min-max";
import ResizableMinMaxRtl from "./resizable/min-max-rtl";
import ResizableCollapsible from "./resizable/collapsible";
import ResizableCollapsibleRtl from "./resizable/collapsible-rtl";

import ScrollAreaDemo from "./scroll-area/demo";
import ScrollAreaDemoRtl from "./scroll-area/demo-rtl";
import ScrollAreaHorizontal from "./scroll-area/horizontal";
import ScrollAreaHorizontalRtl from "./scroll-area/horizontal-rtl";
import ScrollAreaBoth from "./scroll-area/both";
import ScrollAreaBothRtl from "./scroll-area/both-rtl";
import ScrollAreaCode from "./scroll-area/code";
import ScrollAreaCodeRtl from "./scroll-area/code-rtl";
import ScrollAreaChat from "./scroll-area/chat";
import ScrollAreaChatRtl from "./scroll-area/chat-rtl";

import ScrollspyDemo from "./scrollspy/demo";
import ScrollspyDemoRtl from "./scrollspy/demo-rtl";
import ScrollspyNested from "./scrollspy/nested";
import ScrollspyNestedRtl from "./scrollspy/nested-rtl";
import ScrollspyWithOffset from "./scrollspy/with-offset";
import ScrollspyWithOffsetRtl from "./scrollspy/with-offset-rtl";
import ScrollspySidebar from "./scrollspy/sidebar";
import ScrollspySidebarRtl from "./scrollspy/sidebar-rtl";
import ScrollspyWithCallback from "./scrollspy/with-callback";
import ScrollspyWithCallbackRtl from "./scrollspy/with-callback-rtl";
import ScrollspyProgress from "./scrollspy/progress";
import ScrollspyProgressRtl from "./scrollspy/progress-rtl";
import ScrollspyHorizontal from "./scrollspy/horizontal";
import ScrollspyHorizontalRtl from "./scrollspy/horizontal-rtl";

import SelectDemo from "./select/demo";
import SelectDemoRtl from "./select/demo-rtl";
import SelectSizes from "./select/sizes";
import SelectSizesRtl from "./select/sizes-rtl";
import SelectWithGroups from "./select/with-groups";
import SelectWithGroupsRtl from "./select/with-groups-rtl";
import SelectScrollable from "./select/scrollable";
import SelectScrollableRtl from "./select/scrollable-rtl";
import SelectRightIndicator from "./select/right-indicator";
import SelectRightIndicatorRtl from "./select/right-indicator-rtl";
import SelectIndicatorPosition from "./select/indicator-position";
import SelectIndicatorPositionRtl from "./select/indicator-position-rtl";
import SelectCustomIndicator from "./select/custom-indicator";
import SelectCustomIndicatorRtl from "./select/custom-indicator-rtl";
import SelectIcon from "./select/icon";
import SelectIconRtl from "./select/icon-rtl";
import SelectStatus from "./select/status";
import SelectStatusRtl from "./select/status-rtl";
import SelectBadge from "./select/badge";
import SelectBadgeRtl from "./select/badge-rtl";
import SelectAvatar from "./select/avatar";
import SelectAvatarRtl from "./select/avatar-rtl";
import SelectDisabled from "./select/disabled";
import SelectDisabledRtl from "./select/disabled-rtl";
import SelectDisabledOption from "./select/disabled-option";
import SelectDisabledOptionRtl from "./select/disabled-option-rtl";
import SelectForm from "./select/form";
import SelectFormRtl from "./select/form-rtl";
import SelectInvalid from "./select/invalid";
import SelectInvalidRtl from "./select/invalid-rtl";

import SeparatorDemo from "./separator/demo";
import SeparatorDemoRtl from "./separator/demo-rtl";
import SeparatorHorizontal from "./separator/horizontal";
import SeparatorHorizontalRtl from "./separator/horizontal-rtl";
import SeparatorVertical from "./separator/vertical";
import SeparatorVerticalRtl from "./separator/vertical-rtl";
import SeparatorInMenu from "./separator/in-menu";
import SeparatorInMenuRtl from "./separator/in-menu-rtl";
import SeparatorWithText from "./separator/with-text";
import SeparatorWithTextRtl from "./separator/with-text-rtl";
import SeparatorCustomStyle from "./separator/custom-style";
import SeparatorCustomStyleRtl from "./separator/custom-style-rtl";
import SeparatorInCard from "./separator/in-card";
import SeparatorInCardRtl from "./separator/in-card-rtl";

import SheetDemo from "./sheet/demo";
import SheetDemoRtl from "./sheet/demo-rtl";
import SheetSides from "./sheet/sides";
import SheetSidesRtl from "./sheet/sides-rtl";
import SheetSide from "./sheet/side";
import SheetSideRtl from "./sheet/side-rtl";
import SheetScrollable from "./sheet/scrollable";
import SheetScrollableRtl from "./sheet/scrollable-rtl";
import SheetNoOverlay from "./sheet/no-overlay";
import SheetNoOverlayRtl from "./sheet/no-overlay-rtl";
import SheetNoClose from "./sheet/no-close";
import SheetNoCloseRtl from "./sheet/no-close-rtl";
import SheetForm from "./sheet/form";
import SheetFormRtl from "./sheet/form-rtl";
import SheetFilters from "./sheet/filters";
import SheetFiltersRtl from "./sheet/filters-rtl";
import SheetCart from "./sheet/cart";
import SheetCartRtl from "./sheet/cart-rtl";
import SheetNotifications from "./sheet/notifications";
import SheetNotificationsRtl from "./sheet/notifications-rtl";

import ShimmeringTextDemo from "./shimmering-text/demo";
import ShimmeringTextDemoRtl from "./shimmering-text/demo-rtl";
import ShimmeringTextColor from "./shimmering-text/color";
import ShimmeringTextColorRtl from "./shimmering-text/color-rtl";
import ShimmeringTextDurations from "./shimmering-text/durations";
import ShimmeringTextDurationsRtl from "./shimmering-text/durations-rtl";
import ShimmeringTextCustomColors from "./shimmering-text/custom-colors";
import ShimmeringTextCustomColorsRtl from "./shimmering-text/custom-colors-rtl";
import ShimmeringTextNoRepeat from "./shimmering-text/no-repeat";
import ShimmeringTextNoRepeatRtl from "./shimmering-text/no-repeat-rtl";
import ShimmeringTextWithDelay from "./shimmering-text/with-delay";
import ShimmeringTextWithDelayRtl from "./shimmering-text/with-delay-rtl";
import ShimmeringTextMultiple from "./shimmering-text/multiple";
import ShimmeringTextMultipleRtl from "./shimmering-text/multiple-rtl";
import ShimmeringTextSpread from "./shimmering-text/spread";
import ShimmeringTextSpreadRtl from "./shimmering-text/spread-rtl";
import ShimmeringTextHero from "./shimmering-text/hero";
import ShimmeringTextHeroRtl from "./shimmering-text/hero-rtl";

import SidebarDemo from "./sidebar/demo";
import SidebarCollapsibleIcon from "./sidebar/collapsible-icon";
import SidebarWithSubmenu from "./sidebar/with-submenu";
import SidebarFloating from "./sidebar/floating";
import SidebarRightSide from "./sidebar/right-side";
import SidebarWithSearch from "./sidebar/with-search";
import SidebarWithActions from "./sidebar/with-actions";
import SidebarInsetVariant from "./sidebar/inset-variant";
import SidebarWithLoading from "./sidebar/with-loading";
import SidebarWithTooltips from "./sidebar/with-tooltips";
import SidebarControlled from "./sidebar/controlled";

import SkeletonDemo from "./skeleton/demo";
import SkeletonDemoRtl from "./skeleton/demo-rtl";
import SkeletonCard from "./skeleton/card";
import SkeletonCardRtl from "./skeleton/card-rtl";
import SkeletonList from "./skeleton/list";
import SkeletonListRtl from "./skeleton/list-rtl";
import SkeletonTable from "./skeleton/table";
import SkeletonTableRtl from "./skeleton/table-rtl";
import SkeletonForm from "./skeleton/form";
import SkeletonFormRtl from "./skeleton/form-rtl";
import SkeletonArticle from "./skeleton/article";
import SkeletonArticleRtl from "./skeleton/article-rtl";
import SkeletonDashboard from "./skeleton/dashboard";
import SkeletonDashboardRtl from "./skeleton/dashboard-rtl";
import SkeletonProfile from "./skeleton/profile";
import SkeletonProfileRtl from "./skeleton/profile-rtl";

import SliderDemo from "./slider/demo";
import SliderDemoRtl from "./slider/demo-rtl";
import SliderWithValue from "./slider/with-value";
import SliderWithValueRtl from "./slider/with-value-rtl";
import SliderRange from "./slider/range";
import SliderRangeRtl from "./slider/range-rtl";
import SliderTooltip from "./slider/tooltip";
import SliderTooltipRtl from "./slider/tooltip-rtl";
import SliderInput from "./slider/input";
import SliderInputRtl from "./slider/input-rtl";
import SliderSteps from "./slider/steps";
import SliderStepsRtl from "./slider/steps-rtl";
import SliderDisabled from "./slider/disabled";
import SliderDisabledRtl from "./slider/disabled-rtl";
import SliderMinMax from "./slider/min-max";
import SliderMinMaxRtl from "./slider/min-max-rtl";
import SliderVertical from "./slider/vertical";
import SliderVerticalRtl from "./slider/vertical-rtl";
import SliderWithLabels from "./slider/with-labels";
import SliderWithLabelsRtl from "./slider/with-labels-rtl";
import SliderColors from "./slider/colors";
import SliderColorsRtl from "./slider/colors-rtl";
import SliderForm from "./slider/form";
import SliderFormRtl from "./slider/form-rtl";

import SlidingNumberDemo from "./sliding-number/demo";
import SlidingNumberDemoRtl from "./sliding-number/demo-rtl";
import SlidingNumberSlider from "./sliding-number/slider";
import SlidingNumberSliderRtl from "./sliding-number/slider-rtl";
import SlidingNumberWithDelay from "./sliding-number/with-delay";
import SlidingNumberWithDelayRtl from "./sliding-number/with-delay-rtl";
import SlidingNumberNegative from "./sliding-number/negative";
import SlidingNumberNegativeRtl from "./sliding-number/negative-rtl";
import SlidingNumberLargeNumbers from "./sliding-number/large-numbers";
import SlidingNumberLargeNumbersRtl from "./sliding-number/large-numbers-rtl";
import SlidingNumberCustomHeight from "./sliding-number/custom-height";
import SlidingNumberCustomHeightRtl from "./sliding-number/custom-height-rtl";
import SlidingNumberSpeeds from "./sliding-number/speeds";
import SlidingNumberSpeedsRtl from "./sliding-number/speeds-rtl";
import SlidingNumberOnScroll from "./sliding-number/on-scroll";
import SlidingNumberOnScrollRtl from "./sliding-number/on-scroll-rtl";
import SlidingNumberDashboard from "./sliding-number/dashboard";
import SlidingNumberDashboardRtl from "./sliding-number/dashboard-rtl";

import MarqueeDemo from "./marquee/demo";
import MarqueeDemoRtl from "./marquee/demo-rtl";
import MarqueeVertical from "./marquee/vertical";
import MarqueeVerticalRtl from "./marquee/vertical-rtl";
import Marquee3d from "./marquee/3d";
import Marquee3dRtl from "./marquee/3d-rtl";

import TypingTextDemo from "./typing-text/demo";
import TypingTextDemoRtl from "./typing-text/demo-rtl";
import TypingTextLoop from "./typing-text/loop";
import TypingTextLoopRtl from "./typing-text/loop-rtl";
import TypingTextFast from "./typing-text/fast";
import TypingTextFastRtl from "./typing-text/fast-rtl";
import TypingTextSlow from "./typing-text/slow";
import TypingTextSlowRtl from "./typing-text/slow-rtl";
import TypingTextNoCursor from "./typing-text/no-cursor";
import TypingTextNoCursorRtl from "./typing-text/no-cursor-rtl";

import TextRevealDemo from "./text-reveal/demo";
import TextRevealDemoRtl from "./text-reveal/demo-rtl";
import TextRevealSlideVariants from "./text-reveal/slide-variants";
import TextRevealSlideVariantsRtl from "./text-reveal/slide-variants-rtl";
import TextRevealScale from "./text-reveal/scale";
import TextRevealScaleRtl from "./text-reveal/scale-rtl";
import TextRevealBlur from "./text-reveal/blur";
import TextRevealBlurRtl from "./text-reveal/blur-rtl";
import TextRevealTypewriter from "./text-reveal/typewriter";
import TextRevealTypewriterRtl from "./text-reveal/typewriter-rtl";
import TextRevealWave from "./text-reveal/wave";
import TextRevealWaveRtl from "./text-reveal/wave-rtl";
import TextRevealStagger from "./text-reveal/stagger";
import TextRevealStaggerRtl from "./text-reveal/stagger-rtl";
import TextRevealRotate from "./text-reveal/rotate";
import TextRevealRotateRtl from "./text-reveal/rotate-rtl";
import TextRevealElastic from "./text-reveal/elastic";
import TextRevealElasticRtl from "./text-reveal/elastic-rtl";
import TextRevealNeonGlow from "./text-reveal/neon-glow";
import TextRevealNeonGlowRtl from "./text-reveal/neon-glow-rtl";
import TextRevealFire from "./text-reveal/fire";
import TextRevealFireRtl from "./text-reveal/fire-rtl";

import ThemingBaseColors from "./theming/base-colors";
import ThemingBaseStyles from "./theming/base-styles";

// Sortable demos use @dnd-kit which has SSR issues, so we disable SSR for these
const SortableDemo = dynamic(() => import("./sortable/demo"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableWithHandle = dynamic(() => import("./sortable/with-handle"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableHorizontal = dynamic(() => import("./sortable/horizontal"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableGrid = dynamic(() => import("./sortable/grid"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableNested = dynamic(() => import("./sortable/nested"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableDisabled = dynamic(() => import("./sortable/disabled"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableWithAvatar = dynamic(() => import("./sortable/with-avatar"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableCallbacks = dynamic(() => import("./sortable/callbacks"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableDemoRtl = dynamic(() => import("./sortable/demo-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableWithHandleRtl = dynamic(() => import("./sortable/with-handle-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableHorizontalRtl = dynamic(() => import("./sortable/horizontal-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableGridRtl = dynamic(() => import("./sortable/grid-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableNestedRtl = dynamic(() => import("./sortable/nested-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableDisabledRtl = dynamic(() => import("./sortable/disabled-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableWithAvatarRtl = dynamic(() => import("./sortable/with-avatar-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const SortableCallbacksRtl = dynamic(() => import("./sortable/callbacks-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});

import StepperDemo from "./stepper/demo";
import StepperDemoRtl from "./stepper/demo-rtl";
import StepperStates from "./stepper/states";
import StepperStatesRtl from "./stepper/states-rtl";
import StepperIndicators from "./stepper/indicators";
import StepperIndicatorsRtl from "./stepper/indicators-rtl";
import StepperControlled from "./stepper/controlled";
import StepperControlledRtl from "./stepper/controlled-rtl";
import StepperProgress from "./stepper/progress";
import StepperProgressRtl from "./stepper/progress-rtl";
import StepperTitle from "./stepper/title";
import StepperTitleRtl from "./stepper/title-rtl";
import StepperTitleBar from "./stepper/title-bar";
import StepperTitleBarRtl from "./stepper/title-bar-rtl";
import StepperTitleStatus from "./stepper/title-status";
import StepperTitleStatusRtl from "./stepper/title-status-rtl";
import StepperTitleDescription from "./stepper/title-description";
import StepperTitleDescriptionRtl from "./stepper/title-description-rtl";
import StepperInlineTitle from "./stepper/inline-title";
import StepperInlineTitleRtl from "./stepper/inline-title-rtl";
import StepperInlineTitleDescription from "./stepper/inline-title-description";
import StepperInlineTitleDescriptionRtl from "./stepper/inline-title-description-rtl";
import StepperVertical from "./stepper/vertical";
import StepperVerticalRtl from "./stepper/vertical-rtl";
import StepperVerticalTitle from "./stepper/vertical-title";
import StepperVerticalTitleRtl from "./stepper/vertical-title-rtl";
import StepperVerticalTitleDescription from "./stepper/vertical-title-description";
import StepperVerticalTitleDescriptionRtl from "./stepper/vertical-title-description-rtl";
import StepperWithDescriptions from "./stepper/with-descriptions";
import StepperWithDescriptionsRtl from "./stepper/with-descriptions-rtl";
import StepperWithIcons from "./stepper/with-icons";
import StepperWithIconsRtl from "./stepper/with-icons-rtl";
import StepperWithLoading from "./stepper/with-loading";
import StepperWithLoadingRtl from "./stepper/with-loading-rtl";
import StepperDisabled from "./stepper/disabled";
import StepperDisabledRtl from "./stepper/disabled-rtl";
import StepperFormWizard from "./stepper/form-wizard";
import StepperFormWizardRtl from "./stepper/form-wizard-rtl";
import StepperLinearProgress from "./stepper/linear-progress";
import StepperLinearProgressRtl from "./stepper/linear-progress-rtl";
import StepperClickable from "./stepper/clickable";
import StepperClickableRtl from "./stepper/clickable-rtl";
import StepperVerticalForm from "./stepper/vertical-form";
import StepperVerticalFormRtl from "./stepper/vertical-form-rtl";
import StepperSimple from "./stepper/simple";
import StepperSimpleRtl from "./stepper/simple-rtl";

import SwitchDemo from "./switch/demo";
import SwitchDemoRtl from "./switch/demo-rtl";
import SwitchSizes from "./switch/sizes";
import SwitchSizesRtl from "./switch/sizes-rtl";
import SwitchShapes from "./switch/shapes";
import SwitchShapesRtl from "./switch/shapes-rtl";
import SwitchDisabled from "./switch/disabled";
import SwitchDisabledRtl from "./switch/disabled-rtl";
import SwitchWithIndicators from "./switch/with-indicators";
import SwitchWithIndicatorsRtl from "./switch/with-indicators-rtl";
import SwitchIcon from "./switch/icon";
import SwitchIconRtl from "./switch/icon-rtl";
import SwitchButton from "./switch/button";
import SwitchButtonRtl from "./switch/button-rtl";
import SwitchAdvancedLabel from "./switch/advanced-label";
import SwitchAdvancedLabelRtl from "./switch/advanced-label-rtl";
import SwitchForm from "./switch/form";
import SwitchFormRtl from "./switch/form-rtl";
import SwitchControlled from "./switch/controlled";
import SwitchControlledRtl from "./switch/controlled-rtl";
import SwitchWithDescription from "./switch/with-description";
import SwitchWithDescriptionRtl from "./switch/with-description-rtl";

import TableDemo from "./table/demo";
import TableDemoRtl from "./table/demo-rtl";
import TableVertical from "./table/vertical";
import TableVerticalRtl from "./table/vertical-rtl";
import TableWithFooter from "./table/with-footer";
import TableWithFooterRtl from "./table/with-footer-rtl";
import TableWithSelection from "./table/with-selection";
import TableWithSelectionRtl from "./table/with-selection-rtl";
import TableWithActions from "./table/with-actions";
import TableWithActionsRtl from "./table/with-actions-rtl";
import TableWithBadges from "./table/with-badges";
import TableWithBadgesRtl from "./table/with-badges-rtl";
import TableCompact from "./table/compact";
import TableCompactRtl from "./table/compact-rtl";
import TableResponsive from "./table/responsive";
import TableResponsiveRtl from "./table/responsive-rtl";
import TableEmptyState from "./table/empty-state";
import TableEmptyStateRtl from "./table/empty-state-rtl";

import TabsDemo from "./tabs/demo";
import TabsDemoRtl from "./tabs/demo-rtl";
import TabsIcon from "./tabs/icon";
import TabsIconRtl from "./tabs/icon-rtl";
import TabsBadge from "./tabs/badge";
import TabsBadgeRtl from "./tabs/badge-rtl";
import TabsButton from "./tabs/button";
import TabsButtonRtl from "./tabs/button-rtl";
import TabsPill from "./tabs/pill";
import TabsPillRtl from "./tabs/pill-rtl";
import TabsLine from "./tabs/line";
import TabsLineRtl from "./tabs/line-rtl";
import TabsSizeLg from "./tabs/size-lg";
import TabsSizeLgRtl from "./tabs/size-lg-rtl";
import TabsSizeMd from "./tabs/size-md";
import TabsSizeMdRtl from "./tabs/size-md-rtl";
import TabsSizeSm from "./tabs/size-sm";
import TabsSizeSmRtl from "./tabs/size-sm-rtl";
import TabsSizeXs from "./tabs/size-xs";
import TabsSizeXsRtl from "./tabs/size-xs-rtl";
import TabsVariants from "./tabs/variants";
import TabsVariantsRtl from "./tabs/variants-rtl";
import TabsSizes from "./tabs/sizes";
import TabsSizesRtl from "./tabs/sizes-rtl";
import TabsShapes from "./tabs/shapes";
import TabsShapesRtl from "./tabs/shapes-rtl";
import TabsWithIcons from "./tabs/with-icons";
import TabsWithIconsRtl from "./tabs/with-icons-rtl";
import TabsControlled from "./tabs/controlled";
import TabsControlledRtl from "./tabs/controlled-rtl";
import TabsDisabled from "./tabs/disabled";
import TabsDisabledRtl from "./tabs/disabled-rtl";
import TabsVertical from "./tabs/vertical";
import TabsVerticalRtl from "./tabs/vertical-rtl";
import TabsWithBadge from "./tabs/with-badge";
import TabsWithBadgeRtl from "./tabs/with-badge-rtl";

import TextareaDemo from "./textarea/demo";
import TextareaDemoRtl from "./textarea/demo-rtl";
import TextareaSizes from "./textarea/sizes";
import TextareaSizesRtl from "./textarea/sizes-rtl";
import TextareaDisabled from "./textarea/disabled";
import TextareaDisabledRtl from "./textarea/disabled-rtl";
import TextareaWithLabel from "./textarea/with-label";
import TextareaWithLabelRtl from "./textarea/with-label-rtl";
import TextareaWithText from "./textarea/with-text";
import TextareaWithTextRtl from "./textarea/with-text-rtl";
import TextareaForm from "./textarea/form";
import TextareaFormRtl from "./textarea/form-rtl";
import TextareaWithButton from "./textarea/with-button";
import TextareaWithButtonRtl from "./textarea/with-button-rtl";
import TextareaReadonly from "./textarea/readonly";
import TextareaReadonlyRtl from "./textarea/readonly-rtl";

import ToasterDemo from "./toaster/demo";
import ToasterDemoRtl from "./toaster/demo-rtl";
import ToasterTypes from "./toaster/types";
import ToasterTypesRtl from "./toaster/types-rtl";
import ToasterWithDescription from "./toaster/with-description";
import ToasterWithDescriptionRtl from "./toaster/with-description-rtl";
import ToasterWithAction from "./toaster/with-action";
import ToasterWithActionRtl from "./toaster/with-action-rtl";
import ToasterPromise from "./toaster/promise";
import ToasterPromiseRtl from "./toaster/promise-rtl";
import ToasterCustom from "./toaster/custom";
import ToasterCustomRtl from "./toaster/custom-rtl";
import ToasterPosition from "./toaster/position";
import ToasterPositionRtl from "./toaster/position-rtl";
import ToasterLoading from "./toaster/loading";
import ToasterLoadingRtl from "./toaster/loading-rtl";

import ToggleDemo from "./toggle/demo";
import ToggleDemoRtl from "./toggle/demo-rtl";
import ToggleText from "./toggle/text";
import ToggleTextRtl from "./toggle/text-rtl";
import ToggleOutline from "./toggle/outline";
import ToggleOutlineRtl from "./toggle/outline-rtl";
import ToggleSize from "./toggle/size";
import ToggleSizeRtl from "./toggle/size-rtl";
import ToggleSizes from "./toggle/sizes";
import ToggleSizesRtl from "./toggle/sizes-rtl";
import ToggleDisabled from "./toggle/disabled";
import ToggleDisabledRtl from "./toggle/disabled-rtl";
import ToggleVariants from "./toggle/variants";
import ToggleVariantsRtl from "./toggle/variants-rtl";
import ToggleWithText from "./toggle/with-text";
import ToggleWithTextRtl from "./toggle/with-text-rtl";
import ToggleGroupDemo from "./toggle/group-demo";
import ToggleGroupDemoRtl from "./toggle/group-demo-rtl";
import ToggleGroupSingle from "./toggle/group-single";
import ToggleGroupSingleRtl from "./toggle/group-single-rtl";
import ToggleGroupOutline from "./toggle/group-outline";
import ToggleGroupOutlineRtl from "./toggle/group-outline-rtl";
import ToggleGroupSize from "./toggle/group-size";
import ToggleGroupSizeRtl from "./toggle/group-size-rtl";

import TooltipDemo from "./tooltip/demo";
import TooltipDemoRtl from "./tooltip/demo-rtl";
import TooltipSide from "./tooltip/side";
import TooltipSideRtl from "./tooltip/side-rtl";
import TooltipSides from "./tooltip/sides";
import TooltipSidesRtl from "./tooltip/sides-rtl";
import TooltipDisabled from "./tooltip/disabled";
import TooltipDisabledRtl from "./tooltip/disabled-rtl";
import TooltipRichContent from "./tooltip/rich-content";
import TooltipRichContentRtl from "./tooltip/rich-content-rtl";
import TooltipWithIcon from "./tooltip/with-icon";
import TooltipWithIconRtl from "./tooltip/with-icon-rtl";
import TooltipWithProvider from "./tooltip/with-provider";
import TooltipWithProviderRtl from "./tooltip/with-provider-rtl";
import TooltipCustomOffset from "./tooltip/custom-offset";
import TooltipCustomOffsetRtl from "./tooltip/custom-offset-rtl";
import TooltipKeyboard from "./tooltip/keyboard";
import TooltipKeyboardRtl from "./tooltip/keyboard-rtl";

// Tree demos use @headless-tree/core which may have SSR issues
const TreeDemo = dynamic(() => import("./tree/demo"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeLine = dynamic(() => import("./tree/line"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeIcon = dynamic(() => import("./tree/icon"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreePlusMinus = dynamic(() => import("./tree/plus-minus"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeDemoRtl = dynamic(() => import("./tree/demo-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeLineRtl = dynamic(() => import("./tree/line-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeIconRtl = dynamic(() => import("./tree/icon-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreePlusMinusRtl = dynamic(() => import("./tree/plus-minus-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeToggleIcons = dynamic(() => import("./tree/toggle-icons"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeToggleIconsRtl = dynamic(() => import("./tree/toggle-icons-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeWithIcons = dynamic(() => import("./tree/with-icons"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeWithIconsRtl = dynamic(() => import("./tree/with-icons-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeWithSelection = dynamic(() => import("./tree/with-selection"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeWithSelectionRtl = dynamic(() => import("./tree/with-selection-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeWithDragAndDrop = dynamic(() => import("./tree/with-drag-and-drop"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});
const TreeWithDragAndDropRtl = dynamic(() => import("./tree/with-drag-and-drop-rtl"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center p-10">Loading...</div>,
});

import ButtonDemo from "./button/demo";
import ButtonDemoRtl from "./button/demo-rtl";
import ButtonSecondary from "./button/secondary";
import ButtonSecondaryRtl from "./button/secondary-rtl";
import ButtonDestructive from "./button/destructive";
import ButtonDestructiveRtl from "./button/destructive-rtl";
import ButtonOutline from "./button/outline";
import ButtonOutlineRtl from "./button/outline-rtl";
import ButtonGhost from "./button/ghost";
import ButtonGhostRtl from "./button/ghost-rtl";
import ButtonDashed from "./button/dashed";
import ButtonDashedRtl from "./button/dashed-rtl";
import ButtonMono from "./button/mono";
import ButtonMonoRtl from "./button/mono-rtl";
import ButtonDim from "./button/dim";
import ButtonDimRtl from "./button/dim-rtl";
import ButtonForeground from "./button/foreground";
import ButtonForegroundRtl from "./button/foreground-rtl";
import ButtonInverse from "./button/inverse";
import ButtonInverseRtl from "./button/inverse-rtl";
import ButtonSizes from "./button/sizes";
import ButtonSizesRtl from "./button/sizes-rtl";
import ButtonRadius from "./button/radius";
import ButtonRadiusRtl from "./button/radius-rtl";
import ButtonWithIcon from "./button/with-icon";
import ButtonWithIconRtl from "./button/with-icon-rtl";
import ButtonIconTrailing from "./button/icon-trailing";
import ButtonIconTrailingRtl from "./button/icon-trailing-rtl";
import ButtonIconOnly from "./button/icon-only";
import ButtonIconOnlyRtl from "./button/icon-only-rtl";
import ButtonLoading from "./button/loading";
import ButtonLoadingRtl from "./button/loading-rtl";
import ButtonDisabled from "./button/disabled";
import ButtonDisabledRtl from "./button/disabled-rtl";
import ButtonAsChild from "./button/as-child";
import ButtonAsChildRtl from "./button/as-child-rtl";
import ButtonAsInput from "./button/as-input";
import ButtonAsInputRtl from "./button/as-input-rtl";
import ButtonBadge from "./button/badge";
import ButtonBadgeRtl from "./button/badge-rtl";
import ButtonLink from "./button/link";
import ButtonLinkRtl from "./button/link-rtl";
import ButtonFullWidth from "./button/full-width";
import ButtonFullWidthRtl from "./button/full-width-rtl";

import StatisticCardsDemo from "./blocks/statistic-cards/demo";
import StatisticCard1 from "./blocks/statistic-cards/statistic-card-1";
import StatisticCard2 from "./blocks/statistic-cards/statistic-card-2";
import StatisticCard3 from "./blocks/statistic-cards/statistic-card-3";
import StatisticCard4 from "./blocks/statistic-cards/statistic-card-4";
import StatisticCard5 from "./blocks/statistic-cards/statistic-card-5";
import StatisticCard6 from "./blocks/statistic-cards/statistic-card-6";
import StatisticCard7 from "./blocks/statistic-cards/statistic-card-7";
import StatisticCard8 from "./blocks/statistic-cards/statistic-card-8";

export const registry: Record<string, React.ComponentType> = {
  "accordion-demo": AccordionDemo,
  "accordion-demo-rtl": AccordionDemoRtl,
  "accordion-outline": AccordionOutline,
  "accordion-outline-rtl": AccordionOutlineRtl,
  "accordion-solid": AccordionSolid,
  "accordion-solid-rtl": AccordionSolidRtl,
  "accordion-indicator": AccordionIndicator,
  "accordion-indicator-rtl": AccordionIndicatorRtl,
  "accordion-nested": AccordionNested,
  "accordion-nested-rtl": AccordionNestedRtl,
  "accordion-single": AccordionSingle,
  "accordion-multiple": AccordionMultiple,
  "accordion-variants": AccordionVariants,
  "accordion-indicators": AccordionIndicators,
  "accordion-disabled": AccordionDisabled,
  "accordion-controlled": AccordionControlled,
  "accordion-default-value": AccordionDefaultValue,
  "accordion-disabled-root": AccordionDisabledRoot,
  "accordion-complex-content": AccordionComplexContent,
  "accordion-faq": AccordionFAQ,
  "accordion-in-card": AccordionInCard,
  "alert-demo": AlertDemo,
  "alert-demo-rtl": AlertDemoRtl,
  "alert-solid": AlertSolid,
  "alert-solid-rtl": AlertSolidRtl,
  "alert-mono": AlertMono,
  "alert-mono-rtl": AlertMonoRtl,
  "alert-outline": AlertOutline,
  "alert-outline-rtl": AlertOutlineRtl,
  "alert-light": AlertLight,
  "alert-light-rtl": AlertLightRtl,
  "alert-size": AlertSize,
  "alert-size-rtl": AlertSizeRtl,
  "alert-extended": AlertExtended,
  "alert-extended-rtl": AlertExtendedRtl,
  "alert-actions": AlertActions,
  "alert-actions-rtl": AlertActionsRtl,
  "alert-dialog-demo": AlertDialogDemo,
  "alert-dialog-demo-rtl": AlertDialogDemoRtl,
  "alert-dialog-destructive": AlertDialogDestructive,
  "alert-dialog-destructive-rtl": AlertDialogDestructiveRtl,
  "alert-dialog-simple": AlertDialogSimple,
  "alert-dialog-simple-rtl": AlertDialogSimpleRtl,
  "alert-dialog-variants": AlertDialogVariants,
  "alert-dialog-variants-rtl": AlertDialogVariantsRtl,
  "alert-dialog-custom-actions": AlertDialogCustomActions,
  "alert-dialog-custom-actions-rtl": AlertDialogCustomActionsRtl,
  "avatar-demo": AvatarDemo,
  "avatar-demo-rtl": AvatarDemoRtl,
  "avatar-fallback": AvatarFallbackDemo,
  "avatar-fallback-rtl": AvatarFallbackDemoRtl,
  "avatar-status": AvatarStatusDemo,
  "avatar-status-rtl": AvatarStatusDemoRtl,
  "avatar-indicator": AvatarIndicatorDemo,
  "avatar-indicator-rtl": AvatarIndicatorDemoRtl,
  "avatar-badge": AvatarBadge,
  "avatar-badge-rtl": AvatarBadgeRtl,
  "avatar-group": AvatarGroup,
  "avatar-group-rtl": AvatarGroupRtl,
  "avatar-sizes": AvatarSizes,
  "avatar-sizes-rtl": AvatarSizesRtl,
  "avatar-users": AvatarUsers,
  "avatar-users-rtl": AvatarUsersRtl,
  "badge-demo": BadgeDemo,
  "badge-demo-rtl": BadgeDemoRtl,
  "badge-light": BadgeLight,
  "badge-light-rtl": BadgeLightRtl,
  "badge-outline": BadgeOutline,
  "badge-outline-rtl": BadgeOutlineRtl,
  "badge-variants": BadgeVariants,
  "badge-variants-rtl": BadgeVariantsRtl,
  "badge-appearances": BadgeAppearances,
  "badge-appearances-rtl": BadgeAppearancesRtl,
  "badge-sizes": BadgeSizes,
  "badge-sizes-rtl": BadgeSizesRtl,
  "badge-shapes": BadgeShapes,
  "badge-shapes-rtl": BadgeShapesRtl,
  "badge-with-dot": BadgeWithDot,
  "badge-with-dot-rtl": BadgeWithDotRtl,
  "badge-with-icon": BadgeWithIcon,
  "badge-with-icon-rtl": BadgeWithIconRtl,
  "badge-remove-button": BadgeRemoveButton,
  "badge-remove-button-rtl": BadgeRemoveButtonRtl,
  "badge-square": BadgeSquare,
  "badge-square-rtl": BadgeSquareRtl,
  "badge-as-child": BadgeAsChild,
  "badge-as-child-rtl": BadgeAsChildRtl,
  "badge-button": BadgeButtonDemo,
  "badge-button-rtl": BadgeButtonDemoRtl,
  "badge-disabled": BadgeDisabled,
  "badge-disabled-rtl": BadgeDisabledRtl,
  "breadcrumb-demo": BreadcrumbDemo,
  "breadcrumb-demo-rtl": BreadcrumbDemoRtl,
  "breadcrumb-icon": BreadcrumbIcon,
  "breadcrumb-icon-rtl": BreadcrumbIconRtl,
  "breadcrumb-separator": BreadcrumbSeparator,
  "breadcrumb-separator-rtl": BreadcrumbSeparatorRtl,
  "breadcrumb-dropdown": BreadcrumbDropdown,
  "breadcrumb-dropdown-rtl": BreadcrumbDropdownRtl,
  "breadcrumb-card": BreadcrumbCard,
  "breadcrumb-card-rtl": BreadcrumbCardRtl,
  "calendar-demo": CalendarDemo,
  "calendar-demo-rtl": CalendarDemoRtl,
  "calendar-range": CalendarRange,
  "calendar-range-rtl": CalendarRangeRtl,
  "calendar-multiple": CalendarMultiple,
  "calendar-multiple-rtl": CalendarMultipleRtl,
  "calendar-multiple-months": CalendarMultiple,
  "calendar-multiple-months-rtl": CalendarMultipleRtl,
  "calendar-disabled": CalendarDisabled,
  "calendar-disabled-rtl": CalendarDisabledRtl,
  "calendar-show-outside-days": CalendarShowOutsideDays,
  "calendar-show-outside-days-rtl": CalendarShowOutsideDaysRtl,
  "card-demo": CardDemo,
  "card-demo-rtl": CardDemoRtl,
  "card-accent": CardAccent,
  "card-accent-rtl": CardAccentRtl,
  "card-variants": CardVariants,
  "card-variants-rtl": CardVariantsRtl,
  "card-with-toolbar": CardWithToolbar,
  "card-with-toolbar-rtl": CardWithToolbarRtl,
  "card-with-table": CardWithTable,
  "card-with-table-rtl": CardWithTableRtl,
  "card-simple": CardSimple,
  "card-simple-rtl": CardSimpleRtl,
  "card-with-form": CardWithForm,
  "card-with-form-rtl": CardWithFormRtl,
  "carousel-demo": CarouselDemo,
  "carousel-demo-rtl": CarouselDemoRtl,
  "carousel-sizes": CarouselSizes,
  "carousel-sizes-rtl": CarouselSizesRtl,
  "carousel-spacing": CarouselSpacing,
  "carousel-spacing-rtl": CarouselSpacingRtl,
  "carousel-orientation": CarouselOrientation,
  "carousel-orientation-rtl": CarouselOrientationRtl,
  "carousel-api": CarouselApi,
  "carousel-api-rtl": CarouselApiRtl,
  "carousel-plugin": CarouselPlugin,
  "carousel-plugin-rtl": CarouselPluginRtl,
  "chart-demo": ChartDemo,
  "chart-line": ChartLine,
  "chart-line-1": ChartLine1,
  "chart-line-2": ChartLine2,
  "chart-line-3": ChartLine3,
  "chart-line-4": ChartLine4,
  "chart-line-5": ChartLine5,
  "chart-line-6": ChartLine6,
  "chart-line-7": ChartLine7,
  "chart-line-8": ChartLine8,
  "chart-area": ChartArea,
  "chart-area-1": ChartArea1,
  "chart-area-2": ChartArea2,
  "chart-area-3": ChartArea3,
  "chart-area-4": ChartArea4,
  "chart-area-5": ChartArea5,
  "chart-pie": ChartPie,
  "chart-with-legend": ChartWithLegend,
  "chart-demo-rtl": ChartDemoRtl,
  "chart-line-rtl": ChartLineRtl,
  "chart-line-1-rtl": ChartLine1Rtl,
  "chart-line-2-rtl": ChartLine2Rtl,
  "chart-line-3-rtl": ChartLine3Rtl,
  "chart-line-4-rtl": ChartLine4Rtl,
  "chart-line-5-rtl": ChartLine5Rtl,
  "chart-line-6-rtl": ChartLine6Rtl,
  "chart-line-7-rtl": ChartLine7Rtl,
  "chart-line-8-rtl": ChartLine8Rtl,
  "chart-area-rtl": ChartAreaRtl,
  "chart-area-1-rtl": ChartArea1Rtl,
  "chart-area-2-rtl": ChartArea2Rtl,
  "chart-area-3-rtl": ChartArea3Rtl,
  "chart-area-4-rtl": ChartArea4Rtl,
  "chart-area-5-rtl": ChartArea5Rtl,
  "chart-pie-rtl": ChartPieRtl,
  "chart-with-legend-rtl": ChartWithLegendRtl,
  "checkbox-demo": CheckboxDemo,
  "checkbox-demo-rtl": CheckboxDemoRtl,
  "checkbox-checked": CheckboxChecked,
  "checkbox-checked-rtl": CheckboxCheckedRtl,
  "checkbox-disabled": CheckboxDisabled,
  "checkbox-disabled-rtl": CheckboxDisabledRtl,
  "checkbox-indeterminate": CheckboxIndeterminate,
  "checkbox-indeterminate-rtl": CheckboxIndeterminateRtl,
  "checkbox-sizes": CheckboxSizes,
  "checkbox-sizes-rtl": CheckboxSizesRtl,
  "checkbox-form": CheckboxForm,
  "checkbox-form-rtl": CheckboxFormRtl,
  "checkbox-with-text": CheckboxWithText,
  "checkbox-with-text-rtl": CheckboxWithTextRtl,
  "collapsible-demo": CollapsibleDemo,
  "collapsible-demo-rtl": CollapsibleDemoRtl,
  "collapsible-card": CollapsibleCard,
  "collapsible-card-rtl": CollapsibleCardRtl,
  "collapsible-multiple": CollapsibleMultiple,
  "collapsible-multiple-rtl": CollapsibleMultipleRtl,
  "collapsible-simple": CollapsibleSimple,
  "collapsible-simple-rtl": CollapsibleSimpleRtl,
  "collapsible-with-icon": CollapsibleWithIcon,
  "collapsible-with-icon-rtl": CollapsibleWithIconRtl,
  "command-demo": CommandDemo,
  "command-demo-rtl": CommandDemoRtl,
  "command-dialog": CommandDialogDemo,
  "command-dialog-rtl": CommandDialogDemoRtl,
  "command-with-groups": CommandWithGroups,
  "command-with-groups-rtl": CommandWithGroupsRtl,
  "command-with-shortcuts": CommandWithShortcuts,
  "command-with-shortcuts-rtl": CommandWithShortcutsRtl,
  "context-menu-demo": ContextMenuDemo,
  "context-menu-demo-rtl": ContextMenuDemoRtl,
  "context-menu-with-icons": ContextMenuWithIcons,
  "context-menu-with-icons-rtl": ContextMenuWithIconsRtl,
  "context-menu-with-checkbox": ContextMenuWithCheckbox,
  "context-menu-with-checkbox-rtl": ContextMenuWithCheckboxRtl,
  "context-menu-with-radio": ContextMenuWithRadio,
  "context-menu-with-radio-rtl": ContextMenuWithRadioRtl,
  "context-menu-with-submenu": ContextMenuWithSubmenu,
  "context-menu-with-submenu-rtl": ContextMenuWithSubmenuRtl,
  "date-picker-demo": DatePickerDemo,
  "date-picker-demo-rtl": DatePickerDemoRtl,
  "date-picker-date-time": DatePickerDateTime,
  "date-picker-date-time-rtl": DatePickerDateTimeRtl,
  "date-picker-range": DatePickerRange,
  "date-picker-range-rtl": DatePickerRangeRtl,
  "date-picker-presets": DatePickerPresets,
  "date-picker-presets-rtl": DatePickerPresetsRtl,
  "date-picker-form": DatePickerForm,
  "date-picker-form-rtl": DatePickerFormRtl,
  "counting-number-demo": CountingNumberDemo,
  "counting-number-demo-rtl": CountingNumberDemoRtl,
  "counting-number-decimal": CountingNumberDecimal,
  "counting-number-decimal-rtl": CountingNumberDecimalRtl,
  "counting-number-format": CountingNumberFormat,
  "counting-number-format-rtl": CountingNumberFormatRtl,
  "counting-number-duration-delay": CountingNumberDurationDelay,
  "counting-number-duration-delay-rtl": CountingNumberDurationDelayRtl,
  "counting-number-formats": CountingNumberFormats,
  "counting-number-formats-rtl": CountingNumberFormatsRtl,
  "counting-number-start-on-view": CountingNumberStartOnView,
  "counting-number-start-on-view-rtl": CountingNumberStartOnViewRtl,
  "counting-number-stats-cards": CountingNumberStatsCards,
  "counting-number-stats-cards-rtl": CountingNumberStatsCardsRtl,
  "data-grid-demo": DataGridDemo,
  "data-grid-demo-rtl": DataGridDemoRtl,
  "data-grid-cell-border": DataGridCellBorder,
  "data-grid-cell-border-rtl": DataGridCellBorderRtl,
  "data-grid-dense": DataGridDense,
  "data-grid-dense-rtl": DataGridDenseRtl,
  "data-grid-light": DataGridLight,
  "data-grid-light-rtl": DataGridLightRtl,
  "data-grid-stripped": DataGridStripped,
  "data-grid-stripped-rtl": DataGridStrippedRtl,
  "data-grid-auto-width": DataGridAutoWidth,
  "data-grid-auto-width-rtl": DataGridAutoWidthRtl,
  "data-grid-row-selection": DataGridRowSelection,
  "data-grid-row-selection-rtl": DataGridRowSelectionRtl,
  "data-grid-expandable-row": DataGridExpandableRow,
  "data-grid-expandable-row-rtl": DataGridExpandableRowRtl,
  "data-grid-sub-data-grid": DataGridSubDataGrid,
  "data-grid-sub-data-grid-rtl": DataGridSubDataGridRtl,
  "data-grid-column-icons": DataGridColumnIcons,
  "data-grid-column-icons-rtl": DataGridColumnIconsRtl,
  "data-grid-sortable-columns": DataGridSortableColumns,
  "data-grid-sortable-columns-rtl": DataGridSortableColumnsRtl,
  "data-grid-movable-columns": DataGridMovableColumns,
  "data-grid-movable-columns-rtl": DataGridMovableColumnsRtl,
  "data-grid-draggable-columns": DataGridDraggableColumns,
  "data-grid-draggable-columns-rtl": DataGridDraggableColumnsRtl,
  "data-grid-draggable-rows": DataGridDraggableRows,
  "data-grid-draggable-rows-rtl": DataGridDraggableRowsRtl,
  "data-grid-resizable-columns": DataGridResizableColumns,
  "data-grid-resizable-columns-rtl": DataGridResizableColumnsRtl,
  "data-grid-pinnable-columns": DataGridPinnableColumns,
  "data-grid-pinnable-columns-rtl": DataGridPinnableColumnsRtl,
  "data-grid-sticky-header": DataGridStickyHeader,
  "data-grid-sticky-header-rtl": DataGridStickyHeaderRtl,
  "data-grid-column-controls": DataGridColumnControls,
  "data-grid-column-controls-rtl": DataGridColumnControlsRtl,
  "data-grid-card": DataGridCard,
  "data-grid-card-rtl": DataGridCardRtl,
  "data-grid-columns-visibility": DataGridColumnsVisibility,
  "data-grid-columns-visibility-rtl": DataGridColumnsVisibilityRtl,
  "data-grid-skeleton": DataGridSkeleton,
  "data-grid-skeleton-rtl": DataGridSkeletonRtl,
  "data-grid-crud": DataGridCrud,
  "data-grid-crud-rtl": DataGridCrudRtl,
  "data-grid-with-sorting": DataGridWithSorting,
  "data-grid-with-sorting-rtl": DataGridWithSortingRtl,
  "data-grid-with-pagination": DataGridWithPagination,
  "data-grid-with-pagination-rtl": DataGridWithPaginationRtl,
  "data-grid-with-selection": DataGridWithSelection,
  "data-grid-with-selection-rtl": DataGridWithSelectionRtl,
  "data-grid-with-filtering": DataGridWithFiltering,
  "data-grid-with-filtering-rtl": DataGridWithFilteringRtl,
  "data-grid-loading-states": DataGridLoadingStates,
  "data-grid-loading-states-rtl": DataGridLoadingStatesRtl,
  "data-grid-custom-styling": DataGridCustomStyling,
  "data-grid-custom-styling-rtl": DataGridCustomStylingRtl,
  "dialog-demo": DialogDemo,
  "dialog-demo-rtl": DialogDemoRtl,
  "dialog-fullscreen": DialogFullscreen,
  "dialog-fullscreen-rtl": DialogFullscreenRtl,
  "dialog-with-form": DialogWithForm,
  "dialog-with-form-rtl": DialogWithFormRtl,
  "dialog-scrollable": DialogScrollable,
  "dialog-scrollable-rtl": DialogScrollableRtl,
  "dialog-no-close-button": DialogNoCloseButton,
  "dialog-no-close-button-rtl": DialogNoCloseButtonRtl,
  "dialog-custom-trigger": DialogCustomTrigger,
  "dialog-custom-trigger-rtl": DialogCustomTriggerRtl,
  "dialog-no-overlay": DialogNoOverlay,
  "dialog-no-overlay-rtl": DialogNoOverlayRtl,
  "drawer-demo": DrawerDemo,
  "drawer-demo-rtl": DrawerDemoRtl,
  "drawer-with-form": DrawerWithForm,
  "drawer-with-form-rtl": DrawerWithFormRtl,
  "drawer-scrollable": DrawerScrollable,
  "drawer-scrollable-rtl": DrawerScrollableRtl,
  "drawer-scale-background": DrawerScaleBackground,
  "drawer-scale-background-rtl": DrawerScaleBackgroundRtl,
  "drawer-with-actions": DrawerWithActions,
  "drawer-with-actions-rtl": DrawerWithActionsRtl,
  "drawer-custom-handle": DrawerCustomHandle,
  "drawer-custom-handle-rtl": DrawerCustomHandleRtl,
  "dropdown-menu-demo": DropdownMenuDemo,
  "dropdown-menu-demo-rtl": DropdownMenuDemoRtl,
  "dropdown-menu-with-icons": DropdownMenuWithIcons,
  "dropdown-menu-with-icons-rtl": DropdownMenuWithIconsRtl,
  "dropdown-menu-with-checkboxes": DropdownMenuWithCheckboxes,
  "dropdown-menu-with-checkboxes-rtl": DropdownMenuWithCheckboxesRtl,
  "dropdown-menu-with-radio": DropdownMenuWithRadio,
  "dropdown-menu-with-radio-rtl": DropdownMenuWithRadioRtl,
  "dropdown-menu-with-submenu": DropdownMenuWithSubmenu,
  "dropdown-menu-with-submenu-rtl": DropdownMenuWithSubmenuRtl,
  "dropdown-menu-destructive": DropdownMenuDestructive,
  "dropdown-menu-destructive-rtl": DropdownMenuDestructiveRtl,
  "form-demo": FormDemo,
  "form-demo-rtl": FormDemoRtl,
  "form-with-select": FormWithSelect,
  "form-with-select-rtl": FormWithSelectRtl,
  "form-with-checkbox": FormWithCheckbox,
  "form-with-checkbox-rtl": FormWithCheckboxRtl,
  "form-with-textarea": FormWithTextarea,
  "form-with-textarea-rtl": FormWithTextareaRtl,
  "form-with-switch": FormWithSwitch,
  "form-with-switch-rtl": FormWithSwitchRtl,
  "form-nested-fields": FormNestedFields,
  "form-nested-fields-rtl": FormNestedFieldsRtl,
  "hover-card-demo": HoverCardDemo,
  "hover-card-demo-rtl": HoverCardDemoRtl,
  "hover-card-sides": HoverCardSides,
  "hover-card-sides-rtl": HoverCardSidesRtl,
  "hover-card-align": HoverCardAlign,
  "hover-card-align-rtl": HoverCardAlignRtl,
  "hover-card-with-delay": HoverCardWithDelay,
  "hover-card-with-delay-rtl": HoverCardWithDelayRtl,
  "hover-card-user-profile": HoverCardUserProfile,
  "hover-card-user-profile-rtl": HoverCardUserProfileRtl,
  "hover-card-controlled": HoverCardControlled,
  "hover-card-controlled-rtl": HoverCardControlledRtl,
  "input-demo": InputDemo,
  "input-demo-rtl": InputDemoRtl,
  "input-types": InputTypes,
  "input-types-rtl": InputTypesRtl,
  "input-size": InputSize,
  "input-size-rtl": InputSizeRtl,
  "input-disabled": InputDisabled,
  "input-disabled-rtl": InputDisabledRtl,
  "input-readonly": InputReadonly,
  "input-readonly-rtl": InputReadonlyRtl,
  // Temporarily disabled until missing components are added to Soar DS package
  // "input-addon": InputAddonDemo,
  "input-file": InputFile,
  "input-file-rtl": InputFileRtl,
  // "input-date": InputDate,
  // "input-time": InputTime,
  // "input-date-time": InputDateTime,
  // "input-copy-to-clipboard": InputCopyToClipboard,
  // "input-clear-button": InputClearButton,
  "input-form": InputForm,
  "input-form-rtl": InputFormRtl,
  "input-with-label": InputWithLabel,
  "input-with-label-rtl": InputWithLabelRtl,
  "input-with-button": InputWithButton,
  "input-with-button-rtl": InputWithButtonRtl,
  // "input-icon": InputIcon,
  "kbd-demo": KbdDemo,
  "kbd-demo-rtl": KbdDemoRtl,
  "kbd-tooltip": KbdTooltip,
  "kbd-tooltip-rtl": KbdTooltipRtl,
  "kbd-with-group": KbdWithGroup,
  "kbd-with-group-rtl": KbdWithGroupRtl,
  "kbd-key-types": KbdKeyTypes,
  "kbd-key-types-rtl": KbdKeyTypesRtl,
  "kbd-shortcuts": KbdShortcuts,
  "kbd-shortcuts-rtl": KbdShortcutsRtl,
  "kbd-in-text": KbdInText,
  "kbd-in-text-rtl": KbdInTextRtl,
  "kbd-menu-items": KbdMenuItems,
  "kbd-menu-items-rtl": KbdMenuItemsRtl,
  "kbd-function-keys": KbdFunctionKeys,
  "kbd-function-keys-rtl": KbdFunctionKeysRtl,
  "label-demo": LabelDemo,
  "label-demo-rtl": LabelDemoRtl,
  "label-variants": LabelVariants,
  "label-variants-rtl": LabelVariantsRtl,
  "label-required": LabelRequired,
  "label-required-rtl": LabelRequiredRtl,
  "label-with-checkbox": LabelWithCheckbox,
  "label-with-checkbox-rtl": LabelWithCheckboxRtl,
  "label-with-helper-text": LabelWithHelperText,
  "label-with-helper-text-rtl": LabelWithHelperTextRtl,
  "label-disabled": LabelDisabled,
  "label-disabled-rtl": LabelDisabledRtl,
  "label-complex-form": LabelComplexForm,
  "label-complex-form-rtl": LabelComplexFormRtl,
  "menubar-demo": MenubarDemo,
  "menubar-demo-rtl": MenubarDemoRtl,
  "menubar-with-checkboxes": MenubarWithCheckboxes,
  "menubar-with-checkboxes-rtl": MenubarWithCheckboxesRtl,
  "menubar-with-radio": MenubarWithRadio,
  "menubar-with-radio-rtl": MenubarWithRadioRtl,
  "menubar-with-icons": MenubarWithIcons,
  "menubar-with-icons-rtl": MenubarWithIconsRtl,
  "menubar-with-submenu": MenubarWithSubmenu,
  "menubar-with-submenu-rtl": MenubarWithSubmenuRtl,
  "navigation-menu-demo": NavigationMenuDemo,
  "navigation-menu-demo-rtl": NavigationMenuDemoRtl,
  "navigation-menu-no-viewport": NavigationMenuNoViewport,
  "navigation-menu-no-viewport-rtl": NavigationMenuNoViewportRtl,
  "navigation-menu-with-indicator": NavigationMenuWithIndicator,
  "navigation-menu-with-indicator-rtl": NavigationMenuWithIndicatorRtl,
  "navigation-menu-simple": NavigationMenuSimple,
  "navigation-menu-simple-rtl": NavigationMenuSimpleRtl,
  "pagination-demo": PaginationDemo,
  "pagination-demo-rtl": PaginationDemoRtl,
  "pagination-icon": PaginationIcon,
  "pagination-icon-rtl": PaginationIconRtl,
  "pagination-card": PaginationCard,
  "pagination-card-rtl": PaginationCardRtl,
  "pagination-simple": PaginationSimple,
  "pagination-simple-rtl": PaginationSimpleRtl,
  "pagination-with-links": PaginationWithLinks,
  "pagination-with-links-rtl": PaginationWithLinksRtl,
  "pagination-with-text": PaginationWithText,
  "pagination-with-text-rtl": PaginationWithTextRtl,
  "pagination-controlled": PaginationControlled,
  "pagination-controlled-rtl": PaginationControlledRtl,
  "popover-demo": PopoverDemo,
  "popover-demo-rtl": PopoverDemoRtl,
  "popover-with-form": PopoverWithForm,
  "popover-with-form-rtl": PopoverWithFormRtl,
  "popover-with-anchor": PopoverWithAnchor,
  "popover-with-anchor-rtl": PopoverWithAnchorRtl,
  "popover-placement": PopoverPlacement,
  "popover-placement-rtl": PopoverPlacementRtl,
  "popover-controlled": PopoverControlled,
  "popover-controlled-rtl": PopoverControlledRtl,
  "progress-demo": ProgressDemo,
  "progress-demo-rtl": ProgressDemoRtl,
  "progress-status": ProgressStatus,
  "progress-status-rtl": ProgressStatusRtl,
  "progress-circle": ProgressCircle,
  "progress-circle-rtl": ProgressCircleRtl,
  "progress-radial": ProgressRadial,
  "progress-radial-rtl": ProgressRadialRtl,
  "progress-spinner": ProgressSpinner,
  "progress-spinner-rtl": ProgressSpinnerRtl,
  "progress-sizes": ProgressSizes,
  "progress-sizes-rtl": ProgressSizesRtl,
  "progress-colors": ProgressColors,
  "progress-colors-rtl": ProgressColorsRtl,
  "progress-animated": ProgressAnimated,
  "progress-animated-rtl": ProgressAnimatedRtl,
  "progress-circle-demo": ProgressCircleDemo,
  "progress-circle-with-label": ProgressCircleWithLabel,
  "progress-circle-sizes": ProgressCircleSizes,
  "progress-circle-colors": ProgressCircleColors,
  "progress-radial-demo": ProgressRadialDemo,
  "progress-radial-gauge": ProgressRadialGauge,
  "progress-radial-custom-content": ProgressRadialCustomContent,
  "radio-group-demo": RadioGroupDemo,
  "radio-group-demo-rtl": RadioGroupDemoRtl,
  "radio-group-size": RadioGroupSizes,
  "radio-group-disabled": RadioGroupDisabled,
  "radio-group-disabled-rtl": RadioGroupDisabledRtl,
  "radio-group-form": RadioGroupForm,
  "radio-group-form-rtl": RadioGroupFormRtl,
  "radio-group-sizes": RadioGroupSizes,
  "radio-group-sizes-rtl": RadioGroupSizesRtl,
  "radio-group-with-descriptions": RadioGroupWithDescriptions,
  "radio-group-with-descriptions-rtl": RadioGroupWithDescriptionsRtl,
  "radio-group-with-cards": RadioGroupWithCards,
  "radio-group-with-cards-rtl": RadioGroupWithCardsRtl,
  "rating-demo": RatingDemo,
  "rating-demo-rtl": RatingDemoRtl,
  "rating-sizes": RatingSizes,
  "rating-sizes-rtl": RatingSizesRtl,
  "rating-partial": RatingPartial,
  "rating-partial-rtl": RatingPartialRtl,
  "rating-editable": RatingEditable,
  "rating-editable-rtl": RatingEditableRtl,
  "rating-max-rating": RatingMaxRating,
  "rating-max-rating-rtl": RatingMaxRatingRtl,
  "rating-read-only": RatingReadOnly,
  "rating-read-only-rtl": RatingReadOnlyRtl,
  "rating-show-value": RatingShowValue,
  "rating-show-value-rtl": RatingShowValueRtl,
  "rating-statistics": RatingStatistics,
  "rating-statistics-rtl": RatingStatisticsRtl,
  "resizable-demo": ResizableDemo,
  "resizable-demo-rtl": ResizableDemoRtl,
  "resizable-vertical": ResizableVertical,
  "resizable-vertical-rtl": ResizableVerticalRtl,
  "resizable-handle": ResizableHandle,
  "resizable-handle-rtl": ResizableHandleRtl,
  "resizable-nested": ResizableNested,
  "resizable-nested-rtl": ResizableNestedRtl,
  "resizable-min-max": ResizableMinMax,
  "resizable-min-max-rtl": ResizableMinMaxRtl,
  "resizable-collapsible": ResizableCollapsible,
  "resizable-collapsible-rtl": ResizableCollapsibleRtl,
  "scroll-area-demo": ScrollAreaDemo,
  "scroll-area-demo-rtl": ScrollAreaDemoRtl,
  "scroll-area-horizontal": ScrollAreaHorizontal,
  "scroll-area-horizontal-rtl": ScrollAreaHorizontalRtl,
  "scroll-area-both": ScrollAreaBoth,
  "scroll-area-both-rtl": ScrollAreaBothRtl,
  "scroll-area-code": ScrollAreaCode,
  "scroll-area-code-rtl": ScrollAreaCodeRtl,
  "scroll-area-chat": ScrollAreaChat,
  "scroll-area-chat-rtl": ScrollAreaChatRtl,
  "scrollspy-demo": ScrollspyDemo,
  "scrollspy-demo-rtl": ScrollspyDemoRtl,
  "scrollspy-nested": ScrollspyNested,
  "scrollspy-nested-rtl": ScrollspyNestedRtl,
  "scrollspy-with-offset": ScrollspyWithOffset,
  "scrollspy-with-offset-rtl": ScrollspyWithOffsetRtl,
  "scrollspy-sidebar": ScrollspySidebar,
  "scrollspy-sidebar-rtl": ScrollspySidebarRtl,
  "scrollspy-with-callback": ScrollspyWithCallback,
  "scrollspy-with-callback-rtl": ScrollspyWithCallbackRtl,
  "scrollspy-progress": ScrollspyProgress,
  "scrollspy-progress-rtl": ScrollspyProgressRtl,
  "scrollspy-horizontal": ScrollspyHorizontal,
  "scrollspy-horizontal-rtl": ScrollspyHorizontalRtl,
  "select-demo": SelectDemo,
  "select-demo-rtl": SelectDemoRtl,
  "select-sizes": SelectSizes,
  "select-sizes-rtl": SelectSizesRtl,
  "select-with-groups": SelectWithGroups,
  "select-with-groups-rtl": SelectWithGroupsRtl,
  "select-scrollable": SelectScrollable,
  "select-scrollable-rtl": SelectScrollableRtl,
  "select-right-indicator": SelectRightIndicator,
  "select-right-indicator-rtl": SelectRightIndicatorRtl,
  "select-indicator-position": SelectIndicatorPosition,
  "select-indicator-position-rtl": SelectIndicatorPositionRtl,
  "select-custom-indicator": SelectCustomIndicator,
  "select-custom-indicator-rtl": SelectCustomIndicatorRtl,
  "select-icon": SelectIcon,
  "select-icon-rtl": SelectIconRtl,
  "select-status": SelectStatus,
  "select-status-rtl": SelectStatusRtl,
  "select-badge": SelectBadge,
  "select-badge-rtl": SelectBadgeRtl,
  "select-avatar": SelectAvatar,
  "select-avatar-rtl": SelectAvatarRtl,
  "select-disabled": SelectDisabled,
  "select-disabled-rtl": SelectDisabledRtl,
  "select-disabled-option": SelectDisabledOption,
  "select-disabled-option-rtl": SelectDisabledOptionRtl,
  "select-form": SelectForm,
  "select-form-rtl": SelectFormRtl,
  "select-invalid": SelectInvalid,
  "select-invalid-rtl": SelectInvalidRtl,
  "separator-demo": SeparatorDemo,
  "separator-demo-rtl": SeparatorDemoRtl,
  "separator-horizontal": SeparatorHorizontal,
  "separator-horizontal-rtl": SeparatorHorizontalRtl,
  "separator-vertical": SeparatorVertical,
  "separator-vertical-rtl": SeparatorVerticalRtl,
  "separator-in-menu": SeparatorInMenu,
  "separator-in-menu-rtl": SeparatorInMenuRtl,
  "separator-with-text": SeparatorWithText,
  "separator-with-text-rtl": SeparatorWithTextRtl,
  "separator-custom-style": SeparatorCustomStyle,
  "separator-custom-style-rtl": SeparatorCustomStyleRtl,
  "separator-in-card": SeparatorInCard,
  "separator-in-card-rtl": SeparatorInCardRtl,
  "sheet-demo": SheetDemo,
  "sheet-demo-rtl": SheetDemoRtl,
  "sheet-sides": SheetSides,
  "sheet-sides-rtl": SheetSidesRtl,
  "sheet-side": SheetSide,
  "sheet-side-rtl": SheetSideRtl,
  "sheet-scrollable": SheetScrollable,
  "sheet-scrollable-rtl": SheetScrollableRtl,
  "sheet-no-overlay": SheetNoOverlay,
  "sheet-no-overlay-rtl": SheetNoOverlayRtl,
  "sheet-no-close": SheetNoClose,
  "sheet-no-close-rtl": SheetNoCloseRtl,
  "sheet-form": SheetForm,
  "sheet-form-rtl": SheetFormRtl,
  "sheet-filters": SheetFilters,
  "sheet-filters-rtl": SheetFiltersRtl,
  "sheet-cart": SheetCart,
  "sheet-cart-rtl": SheetCartRtl,
  "sheet-notifications": SheetNotifications,
  "sheet-notifications-rtl": SheetNotificationsRtl,
  "shimmering-text-demo": ShimmeringTextDemo,
  "shimmering-text-demo-rtl": ShimmeringTextDemoRtl,
  "shimmering-text-color": ShimmeringTextColor,
  "shimmering-text-color-rtl": ShimmeringTextColorRtl,
  "shimmering-text-durations": ShimmeringTextDurations,
  "shimmering-text-durations-rtl": ShimmeringTextDurationsRtl,
  "shimmering-text-custom-colors": ShimmeringTextCustomColors,
  "shimmering-text-custom-colors-rtl": ShimmeringTextCustomColorsRtl,
  "shimmering-text-no-repeat": ShimmeringTextNoRepeat,
  "shimmering-text-no-repeat-rtl": ShimmeringTextNoRepeatRtl,
  "shimmering-text-with-delay": ShimmeringTextWithDelay,
  "shimmering-text-with-delay-rtl": ShimmeringTextWithDelayRtl,
  "shimmering-text-multiple": ShimmeringTextMultiple,
  "shimmering-text-multiple-rtl": ShimmeringTextMultipleRtl,
  "shimmering-text-spread": ShimmeringTextSpread,
  "shimmering-text-spread-rtl": ShimmeringTextSpreadRtl,
  "shimmering-text-hero": ShimmeringTextHero,
  "shimmering-text-hero-rtl": ShimmeringTextHeroRtl,
  "sidebar-demo": SidebarDemo,
  "sidebar-collapsible-icon": SidebarCollapsibleIcon,
  "sidebar-with-submenu": SidebarWithSubmenu,
  "sidebar-floating": SidebarFloating,
  "sidebar-right-side": SidebarRightSide,
  "sidebar-with-search": SidebarWithSearch,
  "sidebar-with-actions": SidebarWithActions,
  "sidebar-inset-variant": SidebarInsetVariant,
  "sidebar-with-loading": SidebarWithLoading,
  "sidebar-with-tooltips": SidebarWithTooltips,
  "sidebar-controlled": SidebarControlled,
  "skeleton-demo": SkeletonDemo,
  "skeleton-demo-rtl": SkeletonDemoRtl,
  "skeleton-card": SkeletonCard,
  "skeleton-card-rtl": SkeletonCardRtl,
  "skeleton-list": SkeletonList,
  "skeleton-list-rtl": SkeletonListRtl,
  "skeleton-table": SkeletonTable,
  "skeleton-table-rtl": SkeletonTableRtl,
  "skeleton-form": SkeletonForm,
  "skeleton-form-rtl": SkeletonFormRtl,
  "skeleton-article": SkeletonArticle,
  "skeleton-article-rtl": SkeletonArticleRtl,
  "skeleton-dashboard": SkeletonDashboard,
  "skeleton-dashboard-rtl": SkeletonDashboardRtl,
  "skeleton-profile": SkeletonProfile,
  "skeleton-profile-rtl": SkeletonProfileRtl,
  "slider-demo": SliderDemo,
  "slider-demo-rtl": SliderDemoRtl,
  "slider-with-value": SliderWithValue,
  "slider-with-value-rtl": SliderWithValueRtl,
  "slider-range": SliderRange,
  "slider-range-rtl": SliderRangeRtl,
  "slider-tooltip": SliderTooltip,
  "slider-tooltip-rtl": SliderTooltipRtl,
  "slider-input": SliderInput,
  "slider-input-rtl": SliderInputRtl,
  "slider-steps": SliderSteps,
  "slider-steps-rtl": SliderStepsRtl,
  "slider-disabled": SliderDisabled,
  "slider-disabled-rtl": SliderDisabledRtl,
  "slider-min-max": SliderMinMax,
  "slider-min-max-rtl": SliderMinMaxRtl,
  "slider-vertical": SliderVertical,
  "slider-vertical-rtl": SliderVerticalRtl,
  "slider-with-labels": SliderWithLabels,
  "slider-with-labels-rtl": SliderWithLabelsRtl,
  "slider-colors": SliderColors,
  "slider-colors-rtl": SliderColorsRtl,
  "slider-form": SliderForm,
  "slider-form-rtl": SliderFormRtl,
  "sliding-number-demo": SlidingNumberDemo,
  "sliding-number-demo-rtl": SlidingNumberDemoRtl,
  "sliding-number-slider": SlidingNumberSlider,
  "sliding-number-slider-rtl": SlidingNumberSliderRtl,
  "sliding-number-with-delay": SlidingNumberWithDelay,
  "sliding-number-with-delay-rtl": SlidingNumberWithDelayRtl,
  "sliding-number-negative": SlidingNumberNegative,
  "sliding-number-negative-rtl": SlidingNumberNegativeRtl,
  "sliding-number-large-numbers": SlidingNumberLargeNumbers,
  "sliding-number-large-numbers-rtl": SlidingNumberLargeNumbersRtl,
  "sliding-number-custom-height": SlidingNumberCustomHeight,
  "sliding-number-custom-height-rtl": SlidingNumberCustomHeightRtl,
  "sliding-number-speeds": SlidingNumberSpeeds,
  "sliding-number-speeds-rtl": SlidingNumberSpeedsRtl,
  "sliding-number-on-scroll": SlidingNumberOnScroll,
  "sliding-number-on-scroll-rtl": SlidingNumberOnScrollRtl,
  "sliding-number-dashboard": SlidingNumberDashboard,
  "sliding-number-dashboard-rtl": SlidingNumberDashboardRtl,
  "marquee-demo": MarqueeDemo,
  "marquee-demo-rtl": MarqueeDemoRtl,
  "marquee-vertical": MarqueeVertical,
  "marquee-vertical-rtl": MarqueeVerticalRtl,
  "marquee-3d": Marquee3d,
  "marquee-3d-rtl": Marquee3dRtl,
  "typing-text-demo": TypingTextDemo,
  "typing-text-demo-rtl": TypingTextDemoRtl,
  "typing-text-loop": TypingTextLoop,
  "typing-text-loop-rtl": TypingTextLoopRtl,
  "typing-text-fast": TypingTextFast,
  "typing-text-fast-rtl": TypingTextFastRtl,
  "typing-text-slow": TypingTextSlow,
  "typing-text-slow-rtl": TypingTextSlowRtl,
  "typing-text-no-cursor": TypingTextNoCursor,
  "typing-text-no-cursor-rtl": TypingTextNoCursorRtl,
  "text-reveal-demo": TextRevealDemo,
  "text-reveal-demo-rtl": TextRevealDemoRtl,
  "text-reveal-slide-variants": TextRevealSlideVariants,
  "text-reveal-slide-variants-rtl": TextRevealSlideVariantsRtl,
  "text-reveal-scale": TextRevealScale,
  "text-reveal-scale-rtl": TextRevealScaleRtl,
  "text-reveal-blur": TextRevealBlur,
  "text-reveal-blur-rtl": TextRevealBlurRtl,
  "text-reveal-typewriter": TextRevealTypewriter,
  "text-reveal-typewriter-rtl": TextRevealTypewriterRtl,
  "text-reveal-wave": TextRevealWave,
  "text-reveal-wave-rtl": TextRevealWaveRtl,
  "text-reveal-stagger": TextRevealStagger,
  "text-reveal-stagger-rtl": TextRevealStaggerRtl,
  "text-reveal-rotate": TextRevealRotate,
  "text-reveal-rotate-rtl": TextRevealRotateRtl,
  "text-reveal-elastic": TextRevealElastic,
  "text-reveal-elastic-rtl": TextRevealElasticRtl,
  "text-reveal-neon-glow": TextRevealNeonGlow,
  "text-reveal-neon-glow-rtl": TextRevealNeonGlowRtl,
  "text-reveal-fire": TextRevealFire,
  "text-reveal-fire-rtl": TextRevealFireRtl,
  "theming-base-colors": ThemingBaseColors,
  "theming-base-styles": ThemingBaseStyles,
  "sortable-demo": SortableDemo,
  "sortable-demo-rtl": SortableDemoRtl,
  "sortable-with-handle": SortableWithHandle,
  "sortable-with-handle-rtl": SortableWithHandleRtl,
  "sortable-horizontal": SortableHorizontal,
  "sortable-horizontal-rtl": SortableHorizontalRtl,
  "sortable-grid": SortableGrid,
  "sortable-grid-rtl": SortableGridRtl,
  "sortable-nested": SortableNested,
  "sortable-nested-rtl": SortableNestedRtl,
  "sortable-disabled": SortableDisabled,
  "sortable-disabled-rtl": SortableDisabledRtl,
  "sortable-with-avatar": SortableWithAvatar,
  "sortable-with-avatar-rtl": SortableWithAvatarRtl,
  "sortable-callbacks": SortableCallbacks,
  "sortable-callbacks-rtl": SortableCallbacksRtl,
  "stepper-demo": StepperDemo,
  "stepper-demo-rtl": StepperDemoRtl,
  "stepper-states": StepperStates,
  "stepper-states-rtl": StepperStatesRtl,
  "stepper-indicators": StepperIndicators,
  "stepper-indicators-rtl": StepperIndicatorsRtl,
  "stepper-controlled": StepperControlled,
  "stepper-controlled-rtl": StepperControlledRtl,
  "stepper-progress": StepperProgress,
  "stepper-progress-rtl": StepperProgressRtl,
  "stepper-title": StepperTitle,
  "stepper-title-rtl": StepperTitleRtl,
  "stepper-title-bar": StepperTitleBar,
  "stepper-title-bar-rtl": StepperTitleBarRtl,
  "stepper-title-status": StepperTitleStatus,
  "stepper-title-status-rtl": StepperTitleStatusRtl,
  "stepper-title-description": StepperTitleDescription,
  "stepper-title-description-rtl": StepperTitleDescriptionRtl,
  "stepper-inline-title": StepperInlineTitle,
  "stepper-inline-title-rtl": StepperInlineTitleRtl,
  "stepper-inline-title-description": StepperInlineTitleDescription,
  "stepper-inline-title-description-rtl": StepperInlineTitleDescriptionRtl,
  "stepper-vertical": StepperVertical,
  "stepper-vertical-rtl": StepperVerticalRtl,
  "stepper-vertical-title": StepperVerticalTitle,
  "stepper-vertical-title-rtl": StepperVerticalTitleRtl,
  "stepper-vertical-title-description": StepperVerticalTitleDescription,
  "stepper-vertical-title-description-rtl": StepperVerticalTitleDescriptionRtl,
  "stepper-with-descriptions": StepperWithDescriptions,
  "stepper-with-descriptions-rtl": StepperWithDescriptionsRtl,
  "stepper-with-icons": StepperWithIcons,
  "stepper-with-icons-rtl": StepperWithIconsRtl,
  "stepper-with-loading": StepperWithLoading,
  "stepper-with-loading-rtl": StepperWithLoadingRtl,
  "stepper-disabled": StepperDisabled,
  "stepper-disabled-rtl": StepperDisabledRtl,
  "stepper-form-wizard": StepperFormWizard,
  "stepper-form-wizard-rtl": StepperFormWizardRtl,
  "stepper-linear-progress": StepperLinearProgress,
  "stepper-linear-progress-rtl": StepperLinearProgressRtl,
  "stepper-clickable": StepperClickable,
  "stepper-clickable-rtl": StepperClickableRtl,
  "stepper-vertical-form": StepperVerticalForm,
  "stepper-vertical-form-rtl": StepperVerticalFormRtl,
  "stepper-simple": StepperSimple,
  "stepper-simple-rtl": StepperSimpleRtl,
  "switch-demo": SwitchDemo,
  "switch-demo-rtl": SwitchDemoRtl,
  "switch-sizes": SwitchSizes,
  "switch-sizes-rtl": SwitchSizesRtl,
  "switch-shapes": SwitchShapes,
  "switch-shapes-rtl": SwitchShapesRtl,
  "switch-disabled": SwitchDisabled,
  "switch-disabled-rtl": SwitchDisabledRtl,
  "switch-with-indicators": SwitchWithIndicators,
  "switch-with-indicators-rtl": SwitchWithIndicatorsRtl,
  "switch-icon": SwitchIcon,
  "switch-icon-rtl": SwitchIconRtl,
  "switch-button": SwitchButton,
  "switch-button-rtl": SwitchButtonRtl,
  "switch-advanced-label": SwitchAdvancedLabel,
  "switch-advanced-label-rtl": SwitchAdvancedLabelRtl,
  "switch-form": SwitchForm,
  "switch-form-rtl": SwitchFormRtl,
  "switch-controlled": SwitchControlled,
  "switch-controlled-rtl": SwitchControlledRtl,
  "switch-with-description": SwitchWithDescription,
  "switch-with-description-rtl": SwitchWithDescriptionRtl,
  "table-demo": TableDemo,
  "table-demo-rtl": TableDemoRtl,
  "table-vertical": TableVertical,
  "table-vertical-rtl": TableVerticalRtl,
  "table-with-footer": TableWithFooter,
  "table-with-footer-rtl": TableWithFooterRtl,
  "table-with-selection": TableWithSelection,
  "table-with-selection-rtl": TableWithSelectionRtl,
  "table-with-actions": TableWithActions,
  "table-with-actions-rtl": TableWithActionsRtl,
  "table-with-badges": TableWithBadges,
  "table-with-badges-rtl": TableWithBadgesRtl,
  "table-compact": TableCompact,
  "table-compact-rtl": TableCompactRtl,
  "table-responsive": TableResponsive,
  "table-responsive-rtl": TableResponsiveRtl,
  "table-empty-state": TableEmptyState,
  "table-empty-state-rtl": TableEmptyStateRtl,
  "tabs-demo": TabsDemo,
  "tabs-demo-rtl": TabsDemoRtl,
  "tabs-icon": TabsIcon,
  "tabs-icon-rtl": TabsIconRtl,
  "tabs-badge": TabsBadge,
  "tabs-badge-rtl": TabsBadgeRtl,
  "tabs-button": TabsButton,
  "tabs-button-rtl": TabsButtonRtl,
  "tabs-pill": TabsPill,
  "tabs-pill-rtl": TabsPillRtl,
  "tabs-line": TabsLine,
  "tabs-line-rtl": TabsLineRtl,
  "tabs-size-lg": TabsSizeLg,
  "tabs-size-lg-rtl": TabsSizeLgRtl,
  "tabs-size-md": TabsSizeMd,
  "tabs-size-md-rtl": TabsSizeMdRtl,
  "tabs-size-sm": TabsSizeSm,
  "tabs-size-sm-rtl": TabsSizeSmRtl,
  "tabs-size-xs": TabsSizeXs,
  "tabs-size-xs-rtl": TabsSizeXsRtl,
  "tabs-variants": TabsVariants,
  "tabs-variants-rtl": TabsVariantsRtl,
  "tabs-sizes": TabsSizes,
  "tabs-sizes-rtl": TabsSizesRtl,
  "tabs-shapes": TabsShapes,
  "tabs-shapes-rtl": TabsShapesRtl,
  "tabs-with-icons": TabsWithIcons,
  "tabs-with-icons-rtl": TabsWithIconsRtl,
  "tabs-controlled": TabsControlled,
  "tabs-controlled-rtl": TabsControlledRtl,
  "tabs-disabled": TabsDisabled,
  "tabs-disabled-rtl": TabsDisabledRtl,
  "tabs-vertical": TabsVertical,
  "tabs-vertical-rtl": TabsVerticalRtl,
  "tabs-with-badge": TabsWithBadge,
  "tabs-with-badge-rtl": TabsWithBadgeRtl,
  "textarea-demo": TextareaDemo,
  "textarea-demo-rtl": TextareaDemoRtl,
  "textarea-sizes": TextareaSizes,
  "textarea-sizes-rtl": TextareaSizesRtl,
  "textarea-disabled": TextareaDisabled,
  "textarea-disabled-rtl": TextareaDisabledRtl,
  "textarea-with-label": TextareaWithLabel,
  "textarea-with-label-rtl": TextareaWithLabelRtl,
  "textarea-with-text": TextareaWithText,
  "textarea-with-text-rtl": TextareaWithTextRtl,
  "textarea-form": TextareaForm,
  "textarea-form-rtl": TextareaFormRtl,
  "textarea-with-button": TextareaWithButton,
  "textarea-with-button-rtl": TextareaWithButtonRtl,
  "textarea-readonly": TextareaReadonly,
  "textarea-readonly-rtl": TextareaReadonlyRtl,
  "toaster-demo": ToasterDemo,
  "toaster-demo-rtl": ToasterDemoRtl,
  "toaster-types": ToasterTypes,
  "toaster-types-rtl": ToasterTypesRtl,
  "toaster-with-description": ToasterWithDescription,
  "toaster-with-description-rtl": ToasterWithDescriptionRtl,
  "toaster-with-action": ToasterWithAction,
  "toaster-with-action-rtl": ToasterWithActionRtl,
  "toaster-promise": ToasterPromise,
  "toaster-promise-rtl": ToasterPromiseRtl,
  "toaster-custom": ToasterCustom,
  "toaster-custom-rtl": ToasterCustomRtl,
  "toaster-position": ToasterPosition,
  "toaster-position-rtl": ToasterPositionRtl,
  "toaster-loading": ToasterLoading,
  "toaster-loading-rtl": ToasterLoadingRtl,
  "toggle-demo": ToggleDemo,
  "toggle-demo-rtl": ToggleDemoRtl,
  "toggle-text": ToggleText,
  "toggle-text-rtl": ToggleTextRtl,
  "toggle-outline": ToggleOutline,
  "toggle-outline-rtl": ToggleOutlineRtl,
  "toggle-size": ToggleSize,
  "toggle-size-rtl": ToggleSizeRtl,
  "toggle-sizes": ToggleSizes,
  "toggle-sizes-rtl": ToggleSizesRtl,
  "toggle-disabled": ToggleDisabled,
  "toggle-disabled-rtl": ToggleDisabledRtl,
  "toggle-variants": ToggleVariants,
  "toggle-variants-rtl": ToggleVariantsRtl,
  "toggle-with-text": ToggleWithText,
  "toggle-with-text-rtl": ToggleWithTextRtl,
  "toggle-group-demo": ToggleGroupDemo,
  "toggle-group-demo-rtl": ToggleGroupDemoRtl,
  "toggle-group-single": ToggleGroupSingle,
  "toggle-group-single-rtl": ToggleGroupSingleRtl,
  "toggle-group-outline": ToggleGroupOutline,
  "toggle-group-outline-rtl": ToggleGroupOutlineRtl,
  "toggle-group-size": ToggleGroupSize,
  "toggle-group-size-rtl": ToggleGroupSizeRtl,
  "tooltip-demo": TooltipDemo,
  "tooltip-demo-rtl": TooltipDemoRtl,
  "tooltip-side": TooltipSide,
  "tooltip-side-rtl": TooltipSideRtl,
  "tooltip-sides": TooltipSides,
  "tooltip-sides-rtl": TooltipSidesRtl,
  "tooltip-disabled": TooltipDisabled,
  "tooltip-disabled-rtl": TooltipDisabledRtl,
  "tooltip-rich-content": TooltipRichContent,
  "tooltip-rich-content-rtl": TooltipRichContentRtl,
  "tooltip-with-icon": TooltipWithIcon,
  "tooltip-with-icon-rtl": TooltipWithIconRtl,
  "tooltip-with-provider": TooltipWithProvider,
  "tooltip-with-provider-rtl": TooltipWithProviderRtl,
  "tooltip-custom-offset": TooltipCustomOffset,
  "tooltip-custom-offset-rtl": TooltipCustomOffsetRtl,
  "tooltip-keyboard": TooltipKeyboard,
  "tooltip-keyboard-rtl": TooltipKeyboardRtl,
  "button-demo": ButtonDemo,
  "button-demo-rtl": ButtonDemoRtl,
  "button-secondary": ButtonSecondary,
  "button-secondary-rtl": ButtonSecondaryRtl,
  "button-destructive": ButtonDestructive,
  "button-destructive-rtl": ButtonDestructiveRtl,
  "button-outline": ButtonOutline,
  "button-outline-rtl": ButtonOutlineRtl,
  "button-ghost": ButtonGhost,
  "button-ghost-rtl": ButtonGhostRtl,
  "button-dashed": ButtonDashed,
  "button-dashed-rtl": ButtonDashedRtl,
  "button-mono": ButtonMono,
  "button-mono-rtl": ButtonMonoRtl,
  "button-dim": ButtonDim,
  "button-dim-rtl": ButtonDimRtl,
  "button-foreground": ButtonForeground,
  "button-foreground-rtl": ButtonForegroundRtl,
  "button-inverse": ButtonInverse,
  "button-inverse-rtl": ButtonInverseRtl,
  "button-sizes": ButtonSizes,
  "button-sizes-rtl": ButtonSizesRtl,
  "button-size": ButtonSizes,
  "button-size-rtl": ButtonSizesRtl,
  "button-radius": ButtonRadius,
  "button-radius-rtl": ButtonRadiusRtl,
  "button-with-icon": ButtonWithIcon,
  "button-with-icon-rtl": ButtonWithIconRtl,
  "button-icon-trailing": ButtonIconTrailing,
  "button-icon-trailing-rtl": ButtonIconTrailingRtl,
  "button-icon-only": ButtonIconOnly,
  "button-icon-only-rtl": ButtonIconOnlyRtl,
  "button-loading": ButtonLoading,
  "button-loading-rtl": ButtonLoadingRtl,
  "button-disabled": ButtonDisabled,
  "button-disabled-rtl": ButtonDisabledRtl,
  "button-as-child": ButtonAsChild,
  "button-as-child-rtl": ButtonAsChildRtl,
  "button-as-input": ButtonAsInput,
  "button-as-input-rtl": ButtonAsInputRtl,
  "button-badge": ButtonBadge,
  "button-badge-rtl": ButtonBadgeRtl,
  "button-link": ButtonLink,
  "button-link-rtl": ButtonLinkRtl,
  "button-full-width": ButtonFullWidth,
  "button-full-width-rtl": ButtonFullWidthRtl,
  "tree-demo": TreeDemo,
  "tree-demo-rtl": TreeDemoRtl,
  "tree-line": TreeLine,
  "tree-line-rtl": TreeLineRtl,
  "tree-icon": TreeIcon,
  "tree-icon-rtl": TreeIconRtl,
  "tree-plus-minus": TreePlusMinus,
  "tree-plus-minus-rtl": TreePlusMinusRtl,
  "tree-toggle-icons": TreeToggleIcons,
  "tree-toggle-icons-rtl": TreeToggleIconsRtl,
  "tree-with-icons": TreeWithIcons,
  "tree-with-icons-rtl": TreeWithIconsRtl,
  "tree-with-selection": TreeWithSelection,
  "tree-with-selection-rtl": TreeWithSelectionRtl,
  "tree-with-drag-and-drop": TreeWithDragAndDrop,
  "tree-with-drag-and-drop-rtl": TreeWithDragAndDropRtl,
  "statistic-cards-demo": StatisticCardsDemo,
  "statistic-card-1": StatisticCard1,
  "statistic-card-2": StatisticCard2,
  "statistic-card-3": StatisticCard3,
  "statistic-card-4": StatisticCard4,
  "statistic-card-5": StatisticCard5,
  "statistic-card-6": StatisticCard6,
  "statistic-card-7": StatisticCard7,
  "statistic-card-8": StatisticCard8,
};
