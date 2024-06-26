import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", ()=> {
        const component = create(<ProfileStatus status={"it-kamasutra"} updateStatus={()=>{}}/>)
        const root = component.root
        expect(root.instance.state.status).toBe("it-kamasutra")
    })
    test("after creation <span> shouldn't be displayed", ()=> {
        const component = create(<ProfileStatus status={"it-kamasutra"} updateStatus={()=>{}}/>)
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })
    test("after creation <input> shouldn't be displayed", ()=> {
        const component = create(<ProfileStatus status={"it-kamasutra"} updateStatus={()=>{}}/>)
        const root = component.root;
        let inputs = root.findAllByType("input")
        expect(inputs.length).toBe(0);
    })
    test("after creation <span> shouldn't be displayed", ()=> {
        const component = create(<ProfileStatus status={"it-kamasutra"} updateStatus={()=>{}}/>)
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("it-kamasutra")
    })
    test("input should be displayed in editMode instead of span", ()=> {
        const component = create(<ProfileStatus status={"it-kamasutra"} updateStatus={()=>{}}/>)
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("it-kamasutra")
    })
    test("status from props should be in the state", ()=> {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"it-kamasutra"} updateStatus={mockCallback}/>)
        const instance = component.root.instance;
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})