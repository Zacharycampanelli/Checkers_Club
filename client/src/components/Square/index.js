function Square(props) {
    return ( 
        <td className={'square ' + squareStyle(props.row, props.column)}>
            {props.children}
        </td>
    )
}

function squareStyle(row, column) {
    const isEvenRow = (row % 2 === 0)
    const isEvenColumn = (column.charCodeAt() % 2 !== 0)
    const isLight = (isEvenRow && isEvenColumn) || (!isEvenRow && !isEvenColumn)

    return isLight ? 'light' : 'dark'
}

export { squareStyle }
export default Square