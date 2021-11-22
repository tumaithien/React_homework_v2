import IconLoading from "../components/shared/IconLoading";
import Input from "../components/shared/Input";



function DemoInput(){
    return (
        <>
            <div className ="tcl-container">
                <div className ="tcl-col-4">
                    <Input Label="User Name" Placeholder="Nhập user name" />
                    <Input Label="Contact" Placeholder="Số điện thoại" />
                    <Input 
                        type="password" 
                        Label="Password" 
                        Placeholder="Password"
                        onChange={(evt) => {
                            console.log('evt: ',evt.target.value)
                    }}
                     />
                    <Input Label="Search" className="custom-input" type="search" Placeholder="Nhập giá trị cần tìm kiếm" />
                    <Input Label="Search" icon={<IconLoading width="1em" />} className="custom-input" type="search" Placeholder="Nhập giá trị cần tìm kiếm" />
                </div>
            </div>
        </>
    );
}

export default DemoInput