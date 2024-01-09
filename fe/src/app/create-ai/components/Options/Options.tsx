// Options.tsx
import React, { useState } from "react";
import commonStyles from "@/styles/common.module.css";
import { AvailableModel } from "@/app/stores/useAIStore";

import OptionItem from "./components/OptionItem";
import GhostItem from "./components/GhostItem";

interface Props {
    options: AvailableModel[] | undefined;
    onSelect: (arg: AvailableModel) => void;
}

const Options: React.FC<Props> = (props) => {
    const [selectedOption, setSelectedOption] = useState<AvailableModel | null>(
        null
    );

    const handleOptionClick = (selectedValue: AvailableModel) => {
        setSelectedOption(selectedValue);
        props.onSelect(selectedValue);
    };

    if (props.options !== undefined) {
        return (
            <>
                {props.options?.map((option, index) => (
                    <div key={index}>
                        <OptionItem
                            onSelect={handleOptionClick}
                            option={option}
                            isSelected={selectedOption === option}
                        />
                        <div className={commonStyles.space2} />
                    </div>
                ))}
            </>
        );
    }

    return (
        <>
            <GhostItem />
            <div className={commonStyles.space2} />
            <GhostItem />
        </>
    );
};

export default Options;
