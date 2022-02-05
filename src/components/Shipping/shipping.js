
export default function Shippingform() {

    return (
        <div className="App">
            <h3> Shipping Address </h3>
            <div>
                <input
                    placeholder="Full Name ..."

                />
                <input
                    placeholder="Phone No..."

                />
            </div>
            <div>

                <input
                    placeholder="Address Line 1"
                />
                <input
                    placeholder="Address Line 2 "
                />
            </div>
            <div>
                <input
                    placeholder="State"
                />
                <input
                    placeholder="ZipCode"
                />
            </div>
            <form>
                <label>
                    <select >
                    <option value={null}>State</option>
                        <option value="grapefruit">USA</option>
                        <option value="lime">CANADA</option>
                        <option value="coconut">NEW YORK</option>
                        <option value="mango">WASHINGTON DC</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button className="continue_to_checkout"> Continue To payment  </button>
        </div>
    );
}