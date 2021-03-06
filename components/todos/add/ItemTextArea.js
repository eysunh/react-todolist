import styled from 'styled-components';

const ItemDescription = styled.div `
    textarea{
        resize: none;
        border:none;
        border-radius: 2px;
        box-shadow:0 0 2px 1px  #d0d0d0;
        color:#5a5b66;
        font-size:14px;
        padding: 0.25rem;
    }
    input, textarea{
        width:100%;
    }
`;
function ItemTextArea({changeHandler, ...props }) {
    return (
        <ItemDescription {...props}>
            <label htmlFor="description">Description</label>
            <textarea 
            onChange={(e)=> changeHandler(e)}
            placeholder="Add Your To Do Description Here" />
        </ItemDescription>
    )
}

export default ItemTextArea