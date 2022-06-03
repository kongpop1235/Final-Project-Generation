import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ** css
import './SignUp.css';

// ** components
import Banner from '../../Component/Banner/Banner'
import Label from "../../Component/Input/LabelText/LabelText";

const SingUp = () => {
    const [showService, setShowService] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phonenumber, setPhonenumber] = useState("");

    const navigate = useNavigate();

    const submit = (event) => {
        event.preventDefault();
        const registered = {
            username: username,
            phone: phonenumber,
            password: password,
        }
        sessionStorage.setItem('data', JSON.stringify(registered));
        navigate("/Edit_profile")
    }


    // * link to page
    const signInClick = () => {
        navigate("/");
    }
    const forgotPasswordClick = () => {
        navigate("/forgot_password")
    }

    // * Terms of Services detail.
    const ServicesClose = () => {
        setShowService(false);
    }
    const ServicesShow = () => {
        setShowService(true);
    }

    // * Privacy Policy details.
    const PolicyClose = () => {
        setShowPolicy(false);
    }
    const PolicyShow = () => {
        setShowPolicy(true);
    }

    return (
        <section className="section-500 d-flex align-center text-primary">
            {/* Terms of Services dialog */}
            <div hidden={!showService}>
                <div className="modal-background d-flex align-center" onClick={ServicesClose}>
                    <div className="modal-card" id="services-dialog">
                        <h3 className="mb-24 mt-24">Terms of Services</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nulla tortor. Nullam ac ullamcorper mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet at nibh a mattis. Aliquam lobortis tellus nec sodales malesuada. Nunc efficitur ipsum at hendrerit lobortis. Praesent semper nisi interdum tincidunt sollicitudin. Nulla pretium pulvinar sapien, non tincidunt dui lobortis vitae. Sed magna nunc, placerat quis lorem eu, porta ultricies orci. Cras ac diam quis enim porttitor malesuada in sit amet enim. Nunc mattis libero a varius placerat. Nullam sit amet lectus hendrerit, iaculis neque vitae, luctus ipsum. Praesent eget bibendum nunc. Fusce vitae vestibulum nunc. Proin lobortis, dolor at ullamcorper egestas, risus odio condimentum orci, vel dictum metus dolor quis turpis.
                        </p>
                        <br />
                        <p>
                            Suspendisse potenti. Donec sed nisl ultricies, bibendum tortor a, posuere erat. Pellentesque convallis non ante id malesuada. In finibus nisl sit amet ligula cursus vestibulum. Mauris imperdiet, dui nec interdum ultricies, libero urna porttitor mauris, consequat luctus nisl lectus non urna. Fusce ultricies magna id semper tempus. Donec lacinia tincidunt orci, vehicula vulputate leo venenatis ac. Sed faucibus gravida vulputate. Nullam pulvinar, diam vitae placerat dapibus, sem urna tincidunt orci, eget tempus mi purus vitae nunc. Pellentesque vel nulla eget purus feugiat ultricies. Curabitur ac urna at sapien commodo facilisis. Nam sit amet lorem ex. Ut finibus erat ut urna blandit fringilla.
                        </p>
                        <br />
                        <p>
                            Proin sit amet enim eget lorem feugiat cursus vel vel tortor. Sed risus lacus, vulputate vel pulvinar hendrerit, congue sodales dui. Pellentesque fringilla, sapien vitae euismod varius, ex risus interdum augue, vitae egestas nisl dui id leo. Donec pulvinar cursus nunc, eu placerat enim bibendum vitae. Morbi eget turpis eget erat dignissim bibendum sed sed ante. Curabitur porttitor ipsum est, id tempus odio egestas nec. Ut viverra mattis ligula, tempor facilisis libero rhoncus ut. Integer efficitur imperdiet diam eu lobortis. Morbi sagittis lacus molestie suscipit dapibus. Nulla volutpat nec turpis ut ultrices. Vivamus vestibulum, urna ac facilisis tempus, nunc dolor vestibulum tellus, eget varius erat nunc vel nulla. Aenean molestie accumsan quam commodo lacinia. Aliquam dictum tristique tortor id rutrum. Maecenas quis nisi nec ligula efficitur pharetra a quis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper ullamcorper magna, in sagittis purus.
                        </p>
                        <br />
                        <p>
                            Integer sed sapien risus. Fusce vel sollicitudin lectus. Fusce ante sem, varius quis odio eget, mollis tincidunt magna. Duis id lorem vitae tellus sollicitudin pulvinar. Vestibulum elementum consequat odio, eget pulvinar tellus dignissim sed. Integer nisl nulla, fermentum ac feugiat ut, tincidunt eu erat. Phasellus vel efficitur elit. Phasellus sagittis dui vitae cursus suscipit. Mauris pulvinar mattis arcu eget tempus. Curabitur sit amet nibh consectetur, porta enim eget, condimentum metus. Quisque fringilla nisi sed nibh pretium, ac consectetur nunc ornare. Suspendisse efficitur magna dolor, ac sollicitudin mi consequat id. Aenean at leo at enim dapibus egestas. Phasellus posuere est feugiat, hendrerit diam eu, feugiat felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ipsum lacus, pharetra vel rhoncus eu, laoreet eget tortor.
                        </p>
                        <br />
                        <p>
                            Fusce sollicitudin ut magna eu vulputate. Aliquam eleifend mollis eros eu pellentesque. In maximus arcu non dolor condimentum, at placerat mauris scelerisque. Duis et arcu sapien. Morbi vulputate arcu ante, eget accumsan dolor placerat id. Nulla facilisi. Curabitur vitae nunc ullamcorper, tincidunt elit in, vestibulum tortor. Curabitur dictum sem augue. Cras nisl ante, rutrum vel congue eget, vestibulum et dui. Curabitur euismod placerat leo at hendrerit.
                        </p>
                        <div className="text-center">
                            <button id="btn-close" className="btn text-center text-center h-40 mt-24 mb-24" onClick={ServicesClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Privacy Policy dialog */}
            <div hidden={!showPolicy}>
                <div className="modal-background d-flex align-center" onClick={PolicyClose}>
                    <div className="modal-card" id="services-dialog">
                        <h3 className="mb-24 mt-24">Privacy Policy</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales felis ac neque tempus, eu posuere sapien commodo. Fusce erat augue, tempor non venenatis sit amet, molestie vel felis. Duis velit lorem, vehicula pellentesque posuere sit amet, porta nec magna. Aliquam iaculis mattis odio non gravida. Nullam elit leo, tempus vitae faucibus varius, commodo quis nisi. Nunc nibh ipsum, congue vitae sodales vel, dapibus vel purus. Etiam metus lectus, vestibulum iaculis nunc nec, volutpat vestibulum mi.
                        </p>
                        <br />
                        <p>
                            Sed porttitor mauris ac dui ultrices, vitae pharetra est feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque rhoncus laoreet diam, vitae vulputate nisi lacinia sit amet. Phasellus mollis metus sed porttitor dapibus. Morbi justo magna, laoreet ac est nec, luctus feugiat mi. Morbi mauris nibh, viverra et nunc sed, congue posuere nisi. Nam quis lectus arcu.
                        </p>
                        <br />
                        <p>
                            Nullam a massa fringilla, euismod purus eget, tincidunt nunc. Integer volutpat sagittis blandit. Ut aliquet erat nisl, sed porttitor magna gravida in. Phasellus porttitor justo sit amet odio scelerisque, sed imperdiet felis ornare. Cras sed efficitur felis. Fusce consectetur dui nulla, sed condimentum mauris porta et. Nullam eu eleifend eros. Morbi consequat ultrices tincidunt. Integer sed laoreet lectus. Vestibulum sagittis urna malesuada sodales fermentum.
                        </p>
                        <br />
                        <p>
                            Pellentesque pulvinar lectus neque, quis tincidunt velit pulvinar quis. Nunc consectetur tortor in leo porttitor hendrerit. Phasellus id vehicula est. Sed ex libero, pharetra vel risus a, molestie feugiat neque. Donec ex diam, porta vitae arcu ac, consequat finibus quam. Vestibulum pulvinar at urna vitae rutrum. Quisque et justo auctor, malesuada risus vitae, semper ligula. Sed porttitor eros nec consequat porta. Integer a blandit elit, ut volutpat est. In hac habitasse platea dictumst. Curabitur pulvinar tincidunt arcu sed sodales. Maecenas id viverra lectus.
                        </p>
                        <br />
                        <p>
                            Donec eros nibh, aliquam et viverra id, sodales non nulla. Nullam venenatis consectetur consectetur. Phasellus tempus convallis sem ut porta. Nulla sit amet erat in mauris suscipit convallis. Duis consectetur ultrices mi, nec tincidunt tortor pharetra id. Vestibulum vulputate pretium arcu vel lobortis. Etiam eu urna est. Nullam ac erat ac arcu fringilla posuere id facilisis risus. Nulla ac nibh in orci placerat pharetra ac eu diam. Praesent arcu purus, condimentum non est faucibus, commodo vehicula turpis. Fusce eget lectus accumsan, commodo elit eget, eleifend urna. Vivamus eleifend leo congue orci ultrices, id porta nisi aliquet. Suspendisse vel condimentum risus.
                        </p>
                        <br />
                        <p>
                            Sed lorem orci, congue sit amet nisl vel, ultrices rhoncus mauris. Sed eget risus eros. Nulla eu venenatis libero. Curabitur porta, ante at aliquet semper, magna odio laoreet ante, eget euismod mauris velit quis arcu. Nam condimentum dictum gravida. Ut vitae elit sit amet ipsum accumsan imperdiet. Praesent facilisis at nisi id convallis. Curabitur fermentum lorem mi, eget venenatis eros tincidunt ac. Fusce vestibulum neque a nunc elementum, sed viverra metus pharetra. In efficitur gravida nunc non tempor. Cras feugiat eleifend risus, in mattis enim aliquet imperdiet. Sed ac elementum arcu.
                        </p>
                        <br />
                        <p>
                            Pellentesque sodales erat nisi, sit amet varius odio aliquam sit amet. Mauris pretium consequat turpis ut feugiat. Integer velit ligula, ultrices sed nunc sit amet, ultrices tincidunt elit. Vivamus gravida fringilla arcu, a rhoncus odio. Donec et lorem nisi. Duis at augue volutpat, lacinia ipsum sed, porta arcu. Vestibulum porttitor augue ligula, non interdum nisl consectetur non. Nullam ultrices nisi dolor, ut tristique mauris pellentesque eget. Aliquam non turpis nec dolor porttitor accumsan. Donec quis sem pharetra, imperdiet sapien ultricies, dignissim dolor. Proin vitae tellus lacus. Nam vel leo commodo, fringilla sem sit amet, convallis dolor. Nam eleifend metus ac tortor sodales dignissim. Phasellus ac turpis sagittis nunc ultricies molestie id vel quam.
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo justo, porttitor sit amet ante ut, bibendum malesuada eros. Praesent sodales dolor vel tincidunt fringilla. Nunc in hendrerit ante. Maecenas molestie metus leo, eu bibendum ex hendrerit vel. Nunc ut vestibulum justo, sed interdum odio. Nam iaculis urna vitae dolor egestas, quis vestibulum dolor commodo.
                        </p>
                        <br />
                        <p>
                            Morbi congue congue fringilla. Curabitur arcu tortor, tincidunt sed volutpat sed, interdum at nunc. Curabitur et elementum nulla. Praesent a massa lacinia urna commodo egestas ac quis arcu. Morbi eget eleifend quam. Morbi nibh libero, tempor eu fringilla et, cursus in leo. Integer luctus ipsum nec nulla scelerisque, sit amet sagittis velit tincidunt. Cras sit amet mauris vehicula, interdum lectus eget, faucibus odio. Proin non orci nec sem pulvinar vulputate quis sit amet mauris. Quisque efficitur neque vel luctus rhoncus. Proin id enim molestie, imperdiet neque lobortis, venenatis metus. Quisque vestibulum magna vitae mattis feugiat. Phasellus nec ante et justo vestibulum pharetra. Integer egestas auctor mauris. Integer nec viverra erat, ac ullamcorper neque.
                        </p>
                        <br />
                        <p>
                            Cras dictum luctus malesuada. Suspendisse vel ullamcorper elit. Sed accumsan sit amet nulla ac interdum. Etiam ac aliquet felis. Duis vestibulum ipsum ut dictum lacinia. Nulla est neque, vulputate et scelerisque non, vehicula eget libero. Ut sit amet purus a augue porttitor vestibulum.
                        </p>
                        <div className="text-center">
                            <button id="btn-close" className="btn text-center text-center h-40 mt-24 mb-24" onClick={PolicyClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mb-24">
                    <Banner>GOAL TO FIT</Banner>
                </div>
                <h1 className="mb-24">Sign Up</h1>
                <form onSubmit={submit}>
                    <Label htmlFor="username">Username</Label>
                    <input
                        type="text"
                        id="username"
                        onChange={user => setUsername(user.target.value)}
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                        title="Minimum eight characters, at least one letter and one number"
                        required
                        className="w-500 field mb-24" />
                    <Label htmlFor="password">Password</Label>
                    <input type="password" id="password" onChange={pass => setPassword(pass.target.value)} pattern="^(?=.*[A-Za-z]){8,}$" title="Minimum eight characters" required className="w-500 field mb-24" />
                    <Label htmlFor="phone">Phone number</Label>
                    <input type="tel" id="phone" onChange={phone => setPhonenumber(phone.target.value)} pattern="[0-9]{10}" title="10 number phone Ex. 0812345678" required className="w-500 field mb-24" />
                    <input type="checkbox" className="mr-15" name="agree" value="agree" required />
                    <p className="d-inline mb-24">I agree to the <a href="#" onClick={ServicesShow}><strong>Terms of Services</strong></a> and <a href="#" onClick={PolicyShow}><strong>Privacy Policy.</strong></a></p>
                    <input type="submit" value="Sing up" className="btn mb-24 h-40 text-center" />
                    <div className="d-flex space-between">
                        <a className="text-primary" href="#" onClick={forgotPasswordClick}>
                            Forgot Password?
                        </a>
                        <a className="text-center" href="#" onClick={signInClick}>
                            Have an Account?
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default SingUp;