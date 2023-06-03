import Button from "./Button"

function Banner(props) {

    return (
        <div className="banner container">
            <div className="quote">
                <h3>
                    {props.heading}
                </h3>
            </div>
            <div>
                <p>
                    {props.para}
                </p>
            </div>
            <div className="btnDiv">
                <div className="secondary">
                    <Button
                        btnText='Secondary'
                    />
                </div>
                <div className="primary">
                    <Button
                        btnText='Primary'
                    />
                </div>


            </div>

        </div>
    )
}

export default Banner