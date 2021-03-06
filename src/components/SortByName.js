import '../stylesheets/index.scss';

function SortByName(props) {

    const changeHandler = ev => {
        console.log('clicked in SortByName')
        props.filterHandler({
            key: 'sorting',
            value: ev.target.value
        });
    }
    

    return (
        <section className="sort-section">
            <p>Sort: </p>
            <section>
                {/* <div>
                    <input type="radio" id="byId" name="sort" value="byId" checked onChange={changeHandler}/>
                    <label htmlFor="byId"> by Id</label>
                </div> */}
                <div>
                    <input type="radio" id="byName" name="sort" value="byName" onChange={changeHandler} />
                    <label htmlFor="byName"> alphabetically</label>
                </div>
            </section>
        </section>
    );
}

export default SortByName;