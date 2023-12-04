function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    return (
        <div>
            <h4>JsonStringify</h4>
            squares = {JSON.stringify(squares)}
        </div>
    );
}
export default JsonStringify;