import { useRef } from "react";
import {
    StyleSheet,
    TextInput,
    View,
} from "react-native";

import Colors from "../constants/colors";

interface Props {
    value: string[];
    onChange: (value: string[]) => void;
}

export default function OTPInput({
    value,
    onChange,
}: Props) {
    const refs = useRef<Array<TextInput | null>>([]);

    const handleChange = (text: string, index: number) => {
        const newValue = [...value];

        newValue[index] = text;

        onChange(newValue);

        if (text && index < 3) {
            refs.current[index + 1]?.focus();
        }
    };

    const handleBackspace = (
        key: string,
        index: number
    ) => {
        if (
            key === "Backspace" &&
            !value[index] &&
            index > 0
        ) {
            refs.current[index - 1]?.focus();
        }
    };

    return (
        <View style={styles.container}>
            {value.map((digit, index) => (
                <TextInput
                    key={index}
                    ref={(ref) => {
                        refs.current[index] = ref;
                    }}
                    style={[
                        styles.box,
                        digit && styles.activeBox,
                    ]}
                    value={digit}
                    onChangeText={(text) =>
                        handleChange(text, index)
                    }
                    keyboardType="number-pad"
                    maxLength={1}
                    onKeyPress={({ nativeEvent }) =>
                        handleBackspace(
                            nativeEvent.key,
                            index
                        )
                    }
                    textAlign="center"
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 35,
    },

    box: {
        width: 70,
        height: 70,

        borderRadius: 18,

        borderWidth: 2,

        borderColor: "#D7DDF3",

        fontSize: 34,

        textAlign: "center",
    },

    activeBox: {
        borderColor: Colors.primary,
    },
});