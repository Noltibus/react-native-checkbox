import React from 'react';
import { ViewProps, NativeMethods, NativeSyntheticEvent } from 'react-native';
declare type CheckBoxEvent = NativeSyntheticEvent<Readonly<{
    target: number;
    value: boolean;
}>>;
declare type CommonProps = Readonly<ViewProps & {
    /**
     * Used in case the props change removes the component.
     */
    onChange?: (event: CheckBoxEvent) => void;
    /**
     * Invoked with the new value when the value changes.
     */
    onValueChange?: (value: boolean) => void;
    /**
     * If true the user won't be able to toggle the checkbox.
     * Default value is false.
     */
    disabled?: boolean;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;
}>;
declare type CheckBoxNativeType = NativeMethods;
export declare type Props = Readonly<CommonProps & {
    /**
     * The value of the checkbox.  If true the checkbox will be turned on.
     * Default value is false.
     */
    value?: boolean;
    /**
     * Used to get the ref for the native checkbox
     */
    forwardedRef?: React.Ref<CheckBoxNativeType>;
    /**
     * Controls the colors the checkbox has in checked and unchecked states.
     * TODO: improve this type
     */
    tintColors?: {
        true: any;
        false: any;
    };
}>;
declare const CheckBoxWithRef: any;
export default CheckBoxWithRef;
