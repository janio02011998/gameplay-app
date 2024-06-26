import React from 'react'
import { SvgProps } from 'react-native-svg';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';
import { Text, View } from 'react-native';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = false,
    ...rest
}: Props) {
    const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

    return (
        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
                <LinearGradient
                    style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
                    colors={[checked ? secondary85 : secondary50, secondary40]}
                >
                    {hasCheckBox && 
                        <View style={checked ? styles.checked : styles.check} />
                    }

                    <Icon
                        width={48}
                        height={48}
                    />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    )
}