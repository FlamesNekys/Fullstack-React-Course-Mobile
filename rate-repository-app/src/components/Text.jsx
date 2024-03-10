import { Text as NativeText, Platform, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: Platform.select({
            android: theme.fonts.android,
            ios: theme.fonts.ios,
            default: theme.fonts.default,
        }),
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorTextPrimary: {
        color: theme.colors.textPrimary,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
    paddingBottomBody: {
        paddingBottom: 13,
    },
    paddingBottomS: {
        paddingBottom: 7,
    },
    error: {
        color: theme.colors.error,
    },
    fontSizeRating: {
        fontSize: theme.fontSizes.rating,
    },
});

const Text = ({ color, fontSize, fontWeight, style, paddingBottom, ...props }) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'textPrimary' && styles.colorTextPrimary,
        color === 'primary' && styles.colorPrimary,
        color === 'error' && styles.error,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontSize === 'rating' && styles.fontSizeRating,
        fontWeight === 'bold' && styles.fontWeightBold,
        paddingBottom === 'body' && styles.paddingBottomBody,
        paddingBottom === 's' && styles.paddingBottomS,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default Text;
