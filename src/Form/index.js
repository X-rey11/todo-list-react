import React, {useState, useRef} from "react";
import { StyledForm, FormInput, FormButton } from "./styled"

    const Form = ({addNewTask}) => {
        const [newTaskContent, setNewTaskContent] = useState("")
        const inputRef = useRef(null);

        const onFormSubmit = (event) => {
            event.preventDefault();
            const trimmedNewTaskContent = newTaskContent.trim();
            if (!trimmedNewTaskContent){
                return;
            }

            addNewTask(trimmedNewTaskContent);
            setNewTaskContent("");
            inputRef.current.focus();
        };

        return (
            <StyledForm onSubmit={onFormSubmit}>
                <FormInput
                    ref={inputRef}
                    value={newTaskContent}
                    placeholder="Co jest do zrobienia?"
                    onChange={({target}) => setNewTaskContent(target.value)}
                />

                <FormButton>
                    Dodaj zadanie
                </FormButton>
            </StyledForm>
        );
    };

export default Form;