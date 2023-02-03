import React from "react";
import { cleanup } from "@testing-library/react-native";
import { render } from "@testing-library/react-native";
import { toHaveStyle } from "@testing-library/jest-native/dist/to-have-style";
import { fireEvent } from "@testing-library/react-native";

import App from "../App";
import Signin from "../screens/Signin";
import Index from "../screens/Index";
import Register from "../screens/Register";
import HomePage from "../screens/HomePage";
import SigninForm from "../screens/SigninForm";
import SignupForm from "../screens/SignupForm";
import ViewRegistration from "../screens/ViewRegistration";
import LandingPage from "../screens/LandingPage";
import Settings from "../screens/Settings";
import ProfileForm from "../screens/ProfileForm";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import ForgotPassword from "../screens/ForgotPassword";
import ForgotPasswordForm from "../screens/ForgotPasswordForm";
import CourseRegistration from "../screens/CourseRegistration";
import ChangePasswordForm from "../screens/ChangePasswordForm";
import BiodataForm from "../screens/BioDataForm";
import BioData from "../screens/BioData";
import AdminUserManagement from "../screens/AdminUserManagement";
import AdminSubjectManagement from "../screens/AdminSubjectManagement";
import AdminSignUpForm from "../screens/AdminSignUpForm";
import AdminSettings from "../screens/AdminSettings";
import AdminPageLogin from "../screens/AdminPageLogin";
import AdminPageLoginForm from "../screens/AdminPageLoginForm";
import AdminPage from "../screens/AdminPage";
import AdminHomePage from "../screens/AdminHomePage";
import AdminForgotPasswordForm from "../screens/AdminForgotPasswordForm";
import AdminForgotPassword from "../screens/AdminForgotPassword";
import AdminCourseManagement from "../screens/AdminCourseManagement";
import AdminCharts from "../screens/AdminCharts";
import AdminChangePasswordForm from "../screens/AdminChangePasswordForm";
import AddDepartmentForm from "../screens/AddDepartmentForm";

afterEach(cleanup);

jest.useFakeTimers()

expect.extend({ toHaveStyle });

describe("SignIn Screen", () => {
  // it('Should match the image style in Signin Screen', () => {
  //     const {getByTestId} = render(<Signin/>)

  //     const foundBodyElement = getByTestId('image');

  //     expect(foundBodyElement).toHaveStyle({
  //         flex:1,
  //     justifyContent: "center",
  //     })

  //   })

  it("Should match the container style", () => {
    const { getByTestId } = render(<Signin />);

    const foundBodyElement = getByTestId("container");

    expect(foundBodyElement).toHaveStyle({
      backgroundColor: "pink",
      flex: 1,
    });
  });
});

describe("SigninForm Page", () => {
  it("Should match Input style ", () => {
    const { getByTestId } = render(<SigninForm />);
    const foundBodyElement = getByTestId("input");
    expect(foundBodyElement).toHaveStyle({
      padding: 10,
      backgroundColor: "#ddd",
      borderWidth: 1,
      borderRadius: 6,
      fontSize: 20,
      width: "100%",
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<SigninForm />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    });
  });
  it("Should match fpassword style ", () => {
    const { getByTestId } = render(<SigninForm />);
    const foundBodyElement = getByTestId("fpassword");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    });
  });
  it("Should match fpasswordbutn style ", () => {
    const { getByTestId } = render(<SigninForm />);
    const foundBodyElement = getByTestId("fpasswordbutn");
    expect(foundBodyElement).toHaveStyle({
      alignSelf: "flex-start",
      alignItems: "flex-start",
    });
  });
//   it("Should match flatbutton Login", () => {
//     const { getByTestId } = render(<SigninForm />);
//     const foundbutton = getByTestId("login-button");
//     //expect(foundbutton).toHaveTestId('login-button')

//     const pressed = fireEvent.press(foundbutton);
//     expect(pressed).toBeTruthy;
//   });
});

afterEach(cleanup);

describe("Index Screen", () => {
  it("Should match container style", () => {
    const { getByTestId } = render(<Index />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#FAE2E2",
      alignItems: "center",
      justifyContent: "space-between",
    });
  });

  it("Should match header style", () => {
    const { getByTestId } = render(<Index />);
    const foundBodyElement = getByTestId("header");
    expect(foundBodyElement).toHaveStyle({
      flex: 0.1,
      flexDirection: "row",
    });
  });

  it("Should match body style", () => {
    const { getByTestId } = render(<Index />);
    const foundBodyElement = getByTestId("body");
    expect(foundBodyElement).toHaveStyle({
      flex: 0.2,
      alignItems: "center",
    });
  });

  it("Should match bottom style", () => {
    const { getByTestId } = render(<Index />);
    const foundBodyElement = getByTestId("bottom");
    expect(foundBodyElement).toHaveStyle({
      flex: 0.2,
      flexDirection: "row",
    });
  });

  it("Should match image style", () => {
    const { getByTestId } = render(<Index />);
    const foundBodyElement = getByTestId("image");
    expect(foundBodyElement).toHaveStyle({
      flexDirection: "row",
      height: 100,
      width: 100,
    });
  });

  it("Should match text style and text", () => {
    //const welcomeText = 'Welcome to TOL University';

    const { getByText } = render(<Index />);

    const foundTextTitle = getByText("Welcome to TOL University");

    expect(foundTextTitle).toHaveStyle({
      fontWeight: "bold",
      fontSize: 20,
    });
  });

  it("Should match main_image style", () => {
    const { getByTestId } = render(<Index />);
    const foundBodyElement = getByTestId("main_image");
    expect(foundBodyElement).toHaveStyle({
      borderRadius: 48,
      height: 100,
      width: 100,
    });
  });

  //     it('Should match button style',()=>{

  //         const {getByTestId} = render(<Index/>);
  //         const foundBodyElement = getByTestId('button');
  //         expect(foundBodyElement).toHaveStyle({
  //             borderRadius: 8,
  //             paddingVertical: 14,
  //             paddingHorizontal: 30,
  //             backgroundColor: '#7A0606',
  //             borderColor: "#000000",
  //             borderWidth: 2
  //         })
  // })

  it("Should match Button Text Login style and Text", () => {
    //const welcomeText = 'Welcome to TOL University';

    const { getByText } = render(<Index />);

    const foundTextTitle = getByText("Login");

    expect(foundTextTitle).toHaveStyle({
      color: "white",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: 20,
    });
  });

  it("Should Button Text Register style and text", () => {
    //const welcomeText = 'Welcome to TOL University';

    const { getByText } = render(<Index />);

    const foundTextTitle = getByText("Register");

    expect(foundTextTitle).toHaveStyle({
      color: "white",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: 20,
    });
  });
});

afterEach(cleanup);

describe("Register Screen", () => {
  // it('Should match the image style',()=>{
  //     const {getByTestId} = render(<Register/>)

  //     const foundBodyElement = getByTestId('image')

  //     expect(foundBodyElement).toHaveStyle({
  //         flex:1,
  //     justifyContent: "center",
  //     })
  // })

  it("Should match the container style", () => {
    const { getByTestId } = render(<Register />);

    const foundBodyElement = getByTestId("container");

    expect(foundBodyElement).toHaveStyle({
      flex: 1,
    });
  });
});

afterEach(cleanup);

describe("SignupForm Page", () => {
  it("Should match Input style ", () => {
    const { getByTestId } = render(<SignupForm />);
    const foundBodyElement = getByTestId("input");
    expect(foundBodyElement).toHaveStyle({
      padding: 10,
      backgroundColor: "#ddd",
      borderWidth: 1,
      borderRadius: 6,
      fontSize: 20,
      width: "100%",
      opacity: 0.5,
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<SignupForm />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    });
  });
  // it('Should match button style ',()=>{
  //     const {getByTestId} = render(<SignupForm/>);
  //     const foundBodyElement = getByTestId('button');
  //     expect(foundBodyElement).toHaveStyle({
  //             borderRadius: 8,
  //         paddingVertical: 14,
  //         paddingHorizontal: 10,
  //         backgroundColor: '#E66464',
  //         borderColor: "#AA0E0F",
  //         borderWidth: 1
  //     })
  // })
  it("Should match error style ", () => {
    const { getByTestId } = render(<SignupForm />);
    const foundBodyElement = getByTestId("error");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 10,
      fontWeight: "bold",
    });
  });
});

afterEach(cleanup);

describe("HomePage Screen", () => {
  it("Should match the container style", () => {
    const { getByTestId } = render(<HomePage />);

    const foundBodyElement = getByTestId("container");

    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#F8D5D4",
      alignItems: "center",
      justifyContent: "space-between",
    });
  });

  it("Should match the body style", () => {
    const { getByTestId } = render(<HomePage />);

    const foundBodyElement = getByTestId("body");

    expect(foundBodyElement).toHaveStyle({
      flex: 0.9,
      alignItems: "center",
    });
  });

  it("Should match the header style", () => {
    const { getByTestId } = render(<HomePage />);

    const foundBodyElement = getByTestId("header");

    expect(foundBodyElement).toHaveStyle({
      padding: 40,
      flex: 0.3,
      alignSelf: "flex-start",
    });
  });

  it("Should match the button style", () => {
    const { getByTestId } = render(<HomePage />);

    const foundBodyElement = getByTestId("button");

    expect(foundBodyElement).toHaveStyle({
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 10,
      backgroundColor: "#E66464",
      borderColor: "#AA0E0F",
      borderWidth: 1,
    });
  });

  it("Should match the buttonText style", () => {
    const { getByTestId } = render(<HomePage />);

    const foundBodyElement = getByTestId("buttonText");

    expect(foundBodyElement).toHaveStyle({
      color: "black",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: 20,
    });
  });

  it("Should match the image style", () => {
    const { getByTestId } = render(<HomePage />);

    const foundBodyElement = getByTestId("image");

    expect(foundBodyElement).toHaveStyle({
      flexDirection: "row",
      height: 80,
      width: 80,
      borderRadius: 48,
    });
  });

  it("Should match the text style", () => {
    const { getByTestId } = render(<HomePage />);

    const foundBodyElement = getByTestId("text");

    expect(foundBodyElement).toHaveStyle({
      fontWeight: "bold",
      fontSize: 20,
      paddingBottom: 30,
    });
  });
});

describe("View Registration Screen", () => {
  it("Should match the container style", () => {
    const { getByTestId } = render(<ViewRegistration/>);

    const foundBodyElement = getByTestId('container');

    expect(foundBodyElement).toHaveStyle({
        flex: 1,
        backgroundColor: '#FAE2E2',
        alignItems: 'center',
        justifyContent: 'space-between',
    });
  });

  it("Should match the header style", () => {
    const { getByTestId } = render(<ViewRegistration/>);

    const foundBodyElement = getByTestId('header');

    expect(foundBodyElement).toHaveStyle({
        padding: 40,
        flex: 0.1,
        alignSelf: 'flex-start'
    });
  });
  it("Should match the body style", () => {
    const { getByTestId } = render(<ViewRegistration/>);

    const foundBodyElement = getByTestId('body');

    expect(foundBodyElement).toHaveStyle({
        flex: 0.8,
        alignItems: 'center',
    });
  });
  it("Should match the text style", () => {
    const { getByTestId } = render(<ViewRegistration/>);

    const foundBodyElement = getByTestId("text");

    expect(foundBodyElement).toHaveStyle({
        fontWeight: 'bold',
        fontSize: 20,
    });
  });
  it("Should match the image style", () => {
    const { getByTestId } = render(<ViewRegistration/>);

    const foundBodyElement = getByTestId("image");

    expect(foundBodyElement).toHaveStyle({
        flexDirection: 'row',
        height: 80,
        width: 80,
        borderRadius: 48,
    });
  });
//   it("Should match the buttonDelete style", () => {
//     const { getByTestId } = render(<ViewRegistration/>);

//     const foundBodyElement = getByTestId('button-Del');

//     expect(foundBodyElement).toHaveStyle({
//         borderRadius: 8,
//         paddingVertical: 1,
//         paddingHorizontal: 1,
//         backgroundColor: '#D8CBB5',
//         borderColor: "#A29898",
//         borderWidth: 1,
//         width: 80
//     });
//   });

//   it("Should match the buttonText style", () => {
//     const { getByTestId } = render(<ViewRegistration/>);

//     const foundBodyElement = getByTestId('buttonText');

//     expect(foundBodyElement).toHaveStyle({
//         color: 'black',
//         fontWeight: 'bold',
//         textTransform: 'uppercase',
//         fontSize: 15,
//     });
//   });
//   it("Should match the item style", () => {
//     const { getByTestId } = render(<ViewRegistration/>);

//     const foundBodyElement = getByTestId('item');

//     expect(foundBodyElement).toHaveStyle({
//         color: 'black',
//         fontSize: 12,
//     });
//   });
});

describe("LandingPage Screen", () => {
  it("Should match the container style", () => {
    const { getByTestId } = render(<LandingPage />);

    const foundBodyElement = getByTestId("container");

    expect(foundBodyElement).toHaveStyle({
        flex: 1,
        backgroundColor: '#FAE2E2',
        alignItems: 'center',
        justifyContent: 'space-between',
    });
  });

  it("Should match the header style", () => {
    const { getByTestId } = render(<LandingPage />);

    const foundBodyElement = getByTestId("header");

    expect(foundBodyElement).toHaveStyle({
        flex:0.1,
        flexDirection:'row'
    });
  });

  it("Should match the button style", () => {
    const { getByTestId } = render(<LandingPage />);

    const foundBodyElement = getByTestId("button");

    expect(foundBodyElement).toHaveStyle({
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 30,
        backgroundColor: '#7A0606',
        borderColor: "#000000",
        borderWidth: 2
    });
  });

  it("Should match the buttonText style", () => {
    const { getByTestId } = render(<LandingPage />);

    const foundBodyElement = getByTestId("buttonText");

    expect(foundBodyElement).toHaveStyle({
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
    });
  });

  it("Should match the Main image style", () => {
    const { getByTestId } = render(<LandingPage />);

    const foundBodyElement = getByTestId("mainImage");

    expect(foundBodyElement).toHaveStyle({
        borderRadius: 48,
        height:100,
        width:100,
    });
  });

  it("Should match the bottom style", () => {
    const { getByTestId } = render(<LandingPage />);

    const foundBodyElement = getByTestId("bottom");

    expect(foundBodyElement).toHaveStyle({
      flex: 0.2,
      flexDirection: "row",
    });
  });
});

describe("Settings Screen", () => {
  it("should match container style", () => {
    const { getByTestId } = render(<Settings/>);
    const foundBodyElement = getByTestId("containerTest");
    expect(foundBodyElement).toHaveStyle({
        flex: 1,
        backgroundColor: '#FAE2E2',
        alignItems: 'center',
        justifyContent: 'space-between',
    });
  });
  it("should match header style", () => {
    const { getByTestId } = render(<Settings/>);
    const foundBodyElement = getByTestId("header");
    expect(foundBodyElement).toHaveStyle({
      padding: 40,
      flex: 0.3,
      alignSelf: "flex-start",
    });
  });

  it("should match text style", () => {
    const { getByTestId } = render(<Settings/>);
    const foundBodyElement = getByTestId("text104");
    expect(foundBodyElement).toHaveStyle({
      fontWeight: "bold",
      fontSize: 20,
    });
  });
  it("should match image style", () => {
    const { getByTestId } = render(<Settings/>);
    const foundBodyElement = getByTestId("image");
    expect(foundBodyElement).toHaveStyle({
      flexDirection: "row",
      height: 80,
      width: 80,
      borderRadius: 48,
    });
  });
});

// describe("Profile Form Screen", () => {
//   it("should match body style", () => {
//     const { getByTestId } = render(<ProfileForm />);
//     const foundBodyElement = getByTestId("bodyTest103");
//     expect(foundBodyElement).toHaveStyle({
//       backgroundColor: "skyblue",
//       borderRadius: 10,
//       padding: 15,
//       margin: 5,
//       flexDirection: "row",
//       justifyContent: "space-between",
//     });
//   });
//   it("should match text style", () => {
//     const { getByTestId } = render(<ProfileForm />);
//     const foundBodyElement = getByTestId("textTes103");
//     expect(foundBodyElement).toHaveStyle({
//       fontSize: 20,
//       fontWeight: "500",
//     });
//   });
//   it("should match title style", () => {
//     const { getByTestId } = render(<ProfileForm/>);
//     const foundBodyElement = getByTestId("titleTest103");
//     expect(foundBodyElement).toHaveStyle({
//       fontSize: 20,
//       fontWeight: "bold",
//     });
//   });
// });

describe("Notification Screen", () => {
  it("should match container style", () => {
    const { getByTestId } = render(<Notification />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#FAE2E2",
      alignItems: "center",
      justifyContent: "space-between",
    });
  });
});

describe("Profile Screen", () => {
  it("Should match the container style", () => {
    const { getByTestId } = render(<Profile />);

    const foundBodyElement = getByTestId("container");

    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#FAE2E2",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: "100%",
      paddingBottom: 20,
    });
  });

  it("Should match the header style", () => {
    const { getByTestId } = render(<Profile />);

    const foundBodyElement = getByTestId("header");

    expect(foundBodyElement).toHaveStyle({
      padding: 40,
      flex: 0.2,
      alignSelf: "flex-start",
    });
  });
  it("Should match the body style", () => {
    const { getByTestId } = render(<Profile />);

    const foundBodyElement = getByTestId('bodyTest101');

    expect(foundBodyElement).toHaveStyle({
      flex: 0.9,
      alignItems: "center",
      minWidth: "100%",
      marginBottom: 100,
    });
  });
  it("Should match the text style", () => {
    const { getByTestId } = render(<Profile />);

    const foundBodyElement = getByTestId('textTest101');

    expect(foundBodyElement).toHaveStyle({
      fontWeight: "bold",
      fontSize: 20,
    });
  });
  it("Should match the image style", () => {
    const { getByTestId } = render(<Profile />);

    const foundBodyElement = getByTestId("image");

    expect(foundBodyElement).toHaveStyle({
      flexDirection: "row",
      height: 80,
      width: 80,
      borderRadius: 48,
    });
  });
});

describe("ForgotPasswordForm Screen", () => {
  it("Should match Input style ", () => {
    const { getByTestId } = render(<ForgotPasswordForm />);
    const foundBodyElement = getByTestId("input");
    expect(foundBodyElement).toHaveStyle({
        padding:10,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderRadius: 6,
        fontSize:20,
        width: '100%',
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<ForgotPasswordForm />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
        fontSize:30,
        fontWeight:"bold",
        textAlign: "center"
    });
  });
  it("Should match error style ", () => {
    const { getByTestId } = render(<ForgotPasswordForm />);
    const foundBodyElement = getByTestId("error");
    expect(foundBodyElement).toHaveStyle({
        fontSize:10,
        fontWeight:"bold"
    });
  });
  it("Should match smalltext style", () => {
    const { getByTestId } = render(<ForgotPasswordForm />);
    const foundBodyElement = getByTestId("smalltext");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 10,
      fontWeight: "bold",
    });
  });
});

describe("ForgotPassword Screen", () => {
  it("should match container style", () => {
    const { getByTestId } = render(<ForgotPassword />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
      backgroundColor: "pink",
      flex: 1,
    });
  });
  
});

// describe("Course Registration Screen", () => {
//   it("should match container style", () => {
//     const { getByTestId } = render(<CourseRegistration />);
//     const foundBodyElement = getByTestId('container');
//     expect(foundBodyElement).toHaveStyle({
//       flex: 1,
//       backgroundColor: "#FAE2E2",
//       alignItems: 'center',
//       justifyContent: "space-between",
//     });
//   });
//   it("should match header style", () => {
//     const { getByTestId } = render(<CourseRegistration />);
//     const foundBodyElement = getByTestId("header");
//     expect(foundBodyElement).toHaveStyle({
//       padding: 40,
//       flex: 0.2,
//       alignSelf: "flex-start",
//     });
//   });
//   it("should match listHeader style", () => {
//     const { getByTestId } = render(<CourseRegistration/>);
//     const foundBodyElement = getByTestId('listHeader');
//     expect(foundBodyElement).toHaveStyle({
//         height: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//     });
//   });
//   it("should match listHeaderItem style", () => {
//     const { getByTestId } = render(<CourseRegistration/>);
//     const foundBodyElement = getByTestId("listHeaderItem");
//     expect(foundBodyElement).toHaveStyle({
//       fontSize: 21,
//       fontWeight: "bold",
//     });
//   });
//   it("should match body style", () => {
//     const { getByTestId } = render(<CourseRegistration/>);
//     const foundBodyElement = getByTestId("body");
//     expect(foundBodyElement).toHaveStyle({
//       flex: 0.1,
//       alignItems: "center",
//     });
//   });
//   it("should match text style", () => {
//     const { getByTestId } = render(<CourseRegistration />);
//     const foundBodyElement = getByTestId("text");
//     expect(foundBodyElement).toHaveStyle({
//       fontWeight: "bold",
//       fontSize: 20,
//     });
//   });
//   it("should match info style", () => {
//     const { getByTestId } = render(<CourseRegistration />);
//     const foundBodyElement = getByTestId("info");
//     expect(foundBodyElement).toHaveStyle({
//       fontSize: 15,
//       fontWeight: "bold",
//     });
//   });
//   it("should match image style", () => {
//     const { getByTestId } = render(<CourseRegistration />);
//     const foundBodyElement = getByTestId("image");
//     expect(foundBodyElement).toHaveStyle({
//       flexDirection: "row",
//       height: 80,
//       width: 80,
//       borderRadius: 48,
//     });
//   });
//   it("should match buttonAdd style", () => {
//     const { getByTestId } = render(<CourseRegistration />);
//     const foundBodyElement = getByTestId("buttonAdd");
//     expect(foundBodyElement).toHaveStyle({
//       borderRadius: 8,
//       paddingVertical: 1,
//       paddingHorizontal: 1,
//       backgroundColor: "#B8D3EA",
//       borderColor: "#7C91E1",
//       borderWidth: 1,
//       width: 50,
//     });
//   });
//   it("should match content style", () => {
//     const { getByTestId } = render(<CourseRegistration />);
//     const foundBodyElement = getByTestId("content");
//     expect(foundBodyElement).toHaveStyle({
//       flex: 0.8,
//     });
//   });
//   it("should match buttonText style", () => {
//     const { getByTestId } = render(<CourseRegistration />);
//     const foundBodyElement = getByTestId('buttonText');
//     expect(foundBodyElement).toHaveStyle({
//       color: "black",
//       fontWeight: "bold",
//       textTransform: "uppercase",
//       fontSize: 15,
//     });
//   });
//   it("should match item style", () => {
//     const { getByTestId } = render(<CourseRegistration />);
//     const foundBodyElement = getByTestId('item');
//     expect(foundBodyElement).toHaveStyle({
//       color: "black",
//       fontSize: 18,
//       paddingVertical: 3,
//       flexDirection: "column",
//     });
//   });
//   it("should match modal style", () => {
//     const { getByTestId } = render(<CourseRegistration />);
//     const foundBodyElement = getByTestId('modal');
//     expect(foundBodyElement).toHaveStyle({
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: "#00BCD4",
//         height: 300,
//         width: '80%',
//         borderRadius: 10,
//         borderWidth: 1,
//         borderColor: '#fff',
//         marginTop: 80,
//         marginLeft: 40,
//     });
//   });
// });

describe("ChangePasswordForm Screen", () => {
  it("Should match Input style ", () => {
    const { getByTestId } = render(<ChangePasswordForm />);
    const foundBodyElement = getByTestId("input");
    expect(foundBodyElement).toHaveStyle({
        padding:10,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderRadius: 6,
        fontSize:20,
        width: '100%',
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<ChangePasswordForm />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    });
  });
  it("Should match error style ", () => {
    const { getByTestId } = render(<ChangePasswordForm />);
    const foundBodyElement = getByTestId("error");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 10,
      fontWeight: "bold",
    });
  });
});

describe("BioDataForm Screen", () => {
  it("Should match Input style ", () => {
    const { getByTestId } = render(<BiodataForm />);
    const foundBodyElement = getByTestId("input");
    expect(foundBodyElement).toHaveStyle({
      padding: 10,
      backgroundColor: "#ddd",
      borderWidth: 1,
      borderRadius: 6,
      fontSize: 20,
      width: "100%",
    });
  });
  it("Should match error style ", () => {
    const { getByTestId } = render(<BiodataForm />);
    const foundBodyElement = getByTestId("error");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 10,
      fontWeight: "bold",
    });
  });
  it("Should match savedetails style ", () => {
    const { getByTestId } = render(<BiodataForm />);
    const foundBodyElement = getByTestId("savedetails");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    });
  });
  it("Should match savedbutn style ", () => {
    const { getByTestId } = render(<BiodataForm />);
    const foundBodyElement = getByTestId("savebutn");
    expect(foundBodyElement).toHaveStyle({
      alignSelf: "flex-end",
      alignItems: "flex-end",
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 30,
      backgroundColor: "#7DBAE2",
      borderColor: "#000000",
      borderWidth: 2,
    });
  });
});

describe("BioData Screen", () => {
  it("Should match image style ", () => {
    const { getByTestId } = render(<BioData />);
    const foundBodyElement = getByTestId("image");
    expect(foundBodyElement).toHaveStyle({
      flexDirection: "row",
      height: 80,
      width: 80,
      borderRadius: 48,
    });
  });
  it("Should match container style ", () => {
    const { getByTestId } = render(<BioData />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
        flex: 1,
        backgroundColor: "#FAE2E2",
        alignItems: "center",
        justifyContent: "space-between",
    });
  });
  it("Should match body style ", () => {
    const { getByTestId } = render(<BioData />);
    const foundBodyElement = getByTestId("body");
    expect(foundBodyElement).toHaveStyle({
      flex: 0.5,
      alignItems: "center",
    });
  });
  it("Should match header style ", () => {
    const { getByTestId } = render(<BioData />);
    const foundBodyElement = getByTestId("header");
    expect(foundBodyElement).toHaveStyle({
      padding: 40,
      flex: 0.3,
      alignSelf: "flex-start",
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<BioData />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
      fontWeight: "bold",
      fontSize: 20,
    });
  });
});

describe("AdminUserManagement Screen", () => {
  it("Should match Container style ", () => {
    const { getByTestId } = render(<AdminUserManagement />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "space-between",
    });
  });
  it("Should match body style ", () => {
    const { getByTestId } = render(<AdminUserManagement />);
    const foundBodyElement = getByTestId("body");
    expect(foundBodyElement).toHaveStyle({
      flex: 0.75,
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<AdminUserManagement />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
      fontWeight: "bold",
      fontSize: 20,
      paddingBottom: 30,
    });
  });
});

describe("AdminSubjectManagement Screen", () => {
  it("Should match Container style ", () => {
    const { getByTestId } = render(<AdminSubjectManagement />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "space-between",
    });
  });
  it("Should match body style ", () => {
    const { getByTestId } = render(<AdminSubjectManagement />);
    const foundBodyElement = getByTestId("body");
    expect(foundBodyElement).toHaveStyle({
      flex: 0.75,
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<AdminSubjectManagement />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 20,
      paddingBottom: 30,
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<AdminSubjectManagement />);
    const foundBodyElement = getByTestId("header");
    expect(foundBodyElement).toHaveStyle({
      color: "black",
      fontWeight: "bold",
    });
  });
});

describe("AdminSignupForm Screen", () => {
  it("Should match Input style ", () => {
    const { getByTestId } = render(<AdminSignUpForm />);
    const foundBodyElement = getByTestId("input");
    expect(foundBodyElement).toHaveStyle({
      padding: 10,
      backgroundColor: "#ddd",
      borderWidth: 1,
      borderRadius: 6,
      fontSize: 20,
      width: "100%",
      opacity: 0.5,
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<AdminSignUpForm />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    });
  });

  it("Should match error style ", () => {
    const { getByTestId } = render(<AdminSignUpForm />);
    const foundBodyElement = getByTestId("error");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 10,
      fontWeight: "bold",
    });
  });

  it("Should match login style ", () => {
    const { getByTestId } = render(<AdminSignUpForm />);
    const foundBodyElement = getByTestId("login");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    });
  });

  it("Should match loginbtn style ", () => {
    const { getByTestId } = render(<AdminSignUpForm />);
    const foundBodyElement = getByTestId("loginbtn");
    expect(foundBodyElement).toHaveStyle({
      alignSelf: "flex-start",
      alignItems: "flex-start",
    });
  });
});

describe("AdminSettings Screen", () => {
  it("should match container style", () => {
    const { getByTestId } = render(<AdminSettings />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "space-between",
    });
  });
  it("should match header style", () => {
    const { getByTestId } = render(<AdminSettings />);
    const foundBodyElement = getByTestId("body");
    expect(foundBodyElement).toHaveStyle({
      flex: 0.75,
    });
  });

  it("should match text style", () => {
    const { getByTestId } = render(<AdminSettings />);
    const foundBodyElement = getByTestId('textTest');
    expect(foundBodyElement).toHaveStyle({
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom:30
    });
  });
});

describe("AdminPageLoginForm Screen", () => {
  it("Should match Input style ", () => {
    const { getByTestId } = render(<AdminPageLoginForm />);
    const foundBodyElement = getByTestId("input");
    expect(foundBodyElement).toHaveStyle({
      padding: 10,
      backgroundColor: "#ddd",
      borderWidth: 1,
      borderRadius: 6,
      fontSize: 20,
      width: "100%",
    });
  });
  it("Should match fpassword style ", () => {
    const { getByTestId } = render(<AdminPageLoginForm />);
    const foundBodyElement = getByTestId("fpassword");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    });
  });
  it("Should match fpasswordbutn style ", () => {
    const { getByTestId } = render(<AdminPageLoginForm />);
    const foundBodyElement = getByTestId('fpasswordbutn');
    expect(foundBodyElement).toHaveStyle({
      alignSelf: "flex-start",
      alignItems: "flex-start",
    });
  });
});

describe("AdminPageLogin Screen", () => {
  it("Should match container style ", () => {
    const { getByTestId } = render(<AdminPageLogin />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "space-between",
    });
  });
  it("Should match header style ", () => {
    const { getByTestId } = render(<AdminPageLogin />);
    const foundBodyElement = getByTestId("header");
    expect(foundBodyElement).toHaveStyle({
      flex: 0.2,
      display: "flex",
      width: "100%",
    });
  });
  it("Should match body style ", () => {
    const { getByTestId } = render(<AdminPageLogin />);
    const foundBodyElement = getByTestId("body");
    expect(foundBodyElement).toHaveStyle({
      flex: 0.75,
    });
  });
  it("Should match headerImage style ", () => {
    const { getByTestId } = render(<AdminPageLogin />);
    const foundBodyElement = getByTestId("headerImage");
    expect(foundBodyElement).toHaveStyle({
      height: 100,
      width: "100%",
      resizeMode: "contain",
    });
  });
});

describe("AdminHomePage Screen", () => {
  it("Should match container style ", () => {
    const { getByTestId } = render(<AdminHomePage />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "space-between",
    });
  });
  it("Should match header style ", () => {
    const { getByTestId } = render(<AdminHomePage />);
    const foundBodyElement = getByTestId("header");
    expect(foundBodyElement).toHaveStyle({
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20,
      paddingBottom: 40,
      color: "#1B21D0",
    });
  });
  it("Should match body style ", () => {
    const { getByTestId } = render(<AdminHomePage />);
    const foundBodyElement = getByTestId('body');
    expect(foundBodyElement).toHaveStyle({
      flex: 0.75,
    });
  });
  it("Should match legend style ", () => {
    const { getByTestId } = render(<AdminHomePage />);
    const foundBodyElement = getByTestId('legend');
    expect(foundBodyElement).toHaveStyle({
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 20,
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<AdminHomePage />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 30
    });
  });
});

describe("AdminForgotPasswordForm Screen", () => {
  it("Should match Input style ", () => {
    const { getByTestId } = render(<AdminForgotPasswordForm />);
    const foundBodyElement = getByTestId("input");
    expect(foundBodyElement).toHaveStyle({
      padding: 10,
      backgroundColor: "#ddd",
      borderWidth: 1,
      borderRadius: 6,
      fontSize: 20,
      width: "100%",
      opacity: 0.5,
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<AdminForgotPasswordForm />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    });
  });
  it("Should match error style ", () => {
    const { getByTestId } = render(<AdminForgotPassword />);
    const foundBodyElement = getByTestId("error");
    expect(foundBodyElement).toHaveStyle({
        fontSize:10,
        fontWeight:"bold"
    });
  });
 
});

describe("AdminForgortPassword Screen", () => {
  it("Should match container style ", () => {
    const { getByTestId } = render(<AdminForgotPassword />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "space-between",
    });
  });
  it("Should match header style ", () => {
    const { getByTestId } = render(<AdminForgotPassword />);
    const foundBodyElement = getByTestId("header");
    expect(foundBodyElement).toHaveStyle({
      flex: 0.2,
      display: "flex",
      width: "100%",
    });
  });
  it("Should match body style ", () => {
    const { getByTestId } = render(<AdminForgotPassword />);
    const foundBodyElement = getByTestId("body");
    expect(foundBodyElement).toHaveStyle({
      flex: 0.75,
    });
  });
  it("Should match headerImage style ", () => {
    const { getByTestId } = render(<AdminForgotPassword />);
    const foundBodyElement = getByTestId("headerImage");
    expect(foundBodyElement).toHaveStyle({
        height:100,
        width:'100%',
        resizeMode: 'contain'
    });
  });
});

describe("AdminCourseManagement", () => {
  it("Should match container style ", () => {
    const { getByTestId } = render(<AdminCourseManagement />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "space-between",
    });
  });
  it("Should match body style ", () => {
    const { getByTestId } = render(<AdminCourseManagement />);
    const foundBodyElement = getByTestId('body');
    expect(foundBodyElement).toHaveStyle({
        flex: 0.75
    });
  });
  it("Should match intro style ", () => {
    const { getByTestId } = render(<AdminCourseManagement />);
    const foundBodyElement = getByTestId("intro");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 15,
      fontWeight: "bold",
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<AdminCourseManagement />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
      fontWeight: "bold",
      fontSize: 20,
      paddingBottom: 30,
    });
  });
  it("Should match TextInput style ", () => {
    const { getByTestId } = render(<AdminCourseManagement />);
    const foundBodyElement = getByTestId("TextInput");
    expect(foundBodyElement).toHaveStyle({
      padding: 10,
      backgroundColor: "#ddd",
      borderWidth: 1,
      borderRadius: 6,
      fontSize: 20,
      width: "100%",
    });
  });
  it("Should match button style ", () => {
    const { getByTestId } = render(<AdminCourseManagement />);
    const foundBodyElement = getByTestId("button");
    expect(foundBodyElement).toHaveStyle({
      borderRadius: 8,
      paddingVertical: 1,
      paddingHorizontal: 1,
      backgroundColor: "#B8D3EA",
      borderColor: "#7C91E1",
      borderWidth: 1,
    });
  });
  it("Should match buttonText style ", () => {
    const { getByTestId } = render(<AdminCourseManagement />);
    const foundBodyElement = getByTestId("buttonText");
    expect(foundBodyElement).toHaveStyle({
      color: "black",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: 20,
    });
  });
  it("Should match header style ", () => {
    const { getByTestId } = render(<AdminCourseManagement />);
    const foundBodyElement = getByTestId("header");
    expect(foundBodyElement).toHaveStyle({
      color: "black",
      fontWeight: "bold",
    });
  });
});

describe("AdminCharts", () => {
  it("Should match container style ", () => {
    const { getByTestId } = render(<AdminCharts />);
    const foundBodyElement = getByTestId("container");
    expect(foundBodyElement).toHaveStyle({
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "space-between",
    });
  });
  it("Should match body style ", () => {
    const { getByTestId } = render(<AdminCharts />);
    const foundBodyElement = getByTestId("body");
    expect(foundBodyElement).toHaveStyle({
        flex: 0.75,
        paddingHorizontal:10
    });
  });
  it("Should match intro style ", () => {
    const { getByTestId } = render(<AdminCharts />);
    const foundBodyElement = getByTestId("intro");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 15,
      fontWeight: "bold",
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<AdminCharts />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: '5%'
    });
  });
  it("Should match TextInput style ", () => {
    const { getByTestId } = render(<AdminCharts />);
    const foundBodyElement = getByTestId("TextInput");
    expect(foundBodyElement).toHaveStyle({
        padding: 10,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 20,
        width: '30%',
        marginVertical: 5
    });
  });
  it("Should match button style ", () => {
    const { getByTestId } = render(<AdminCharts />);
    const foundBodyElement = getByTestId("button");
    expect(foundBodyElement).toHaveStyle({
        borderRadius: 8,
        paddingVertical: 1,
        paddingHorizontal: 1,
        backgroundColor: '#B8D3EA',
        borderColor: "#7C91E1",
        borderWidth: 1,
        width: 60
    });
  });
});

describe("AdminPageLoginForm Screen", () => {
  it("Should match Input style ", () => {
    const { getByTestId } = render(<AdminPageLogin />);
    const foundBodyElement = getByTestId("input");
    expect(foundBodyElement).toHaveStyle({
      padding: 10,
      backgroundColor: "#ddd",
      borderWidth: 1,
      borderRadius: 6,
      fontSize: 20,
      width: "100%",
    });
  });
  it("Should match fpassword style ", () => {
    const { getByTestId } = render(<AdminPageLoginForm />);
    const foundBodyElement = getByTestId("fpassword");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    });
  });
  it("Should match fpasswordbutn style ", () => {
    const { getByTestId } = render(<AdminPageLoginForm />);
    const foundBodyElement = getByTestId("fpasswordbutn");
    expect(foundBodyElement).toHaveStyle({
      alignSelf: "flex-start",
      alignItems: "flex-start",
    });
  });
//   it("Should match flatbutton Login", () => {
//     const { getByTestId } = render(<AdminPageLoginForm />);
//     const foundbutton = getByTestId("login-button");
//     //expect(foundbutton).toHaveTestId('login-button')

//     const pressed = fireEvent.press(foundbutton);
//     expect(pressed).toBeTruthy;
//   });
});

describe("AdminChangePassword Screen", () => {
  it("Should match Input style ", () => {
    const { getByTestId } = render(<AdminChangePasswordForm />);
    const foundBodyElement = getByTestId("input");
    expect(foundBodyElement).toHaveStyle({
      padding: 10,
      backgroundColor: "#ddd",
      borderWidth: 1,
      borderRadius: 6,
      fontSize: 20,
      width: "100%",
    });
  });
  it("Should match text style ", () => {
    const { getByTestId } = render(<AdminChangePasswordForm />);
    const foundBodyElement = getByTestId("text");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    });
  });
  
  it("Should match error style", () => {
    const { getByTestId } = render(<AdminChangePasswordForm />);
    const foundBodyElement = getByTestId("error");
    expect(foundBodyElement).toHaveStyle({
      fontSize: 10,
      fontWeight: "bold",
    });
  });
});

describe("AddDepartmentFrom Screen",()=>{
    it("Should match Input style ", () => {
        const { getByTestId } = render(<AddDepartmentForm/>);
        const foundBodyElement = getByTestId("input");
        expect(foundBodyElement).toHaveStyle({
          padding: 10,
          backgroundColor: "#ddd",
          borderWidth: 1,
          borderRadius: 6,
          fontSize: 20,
          width: "100%",
        });
      });
      it("Should match error style ", () => {
        const { getByTestId } = render(<AddDepartmentForm/>);
        const foundBodyElement = getByTestId("error");
        expect(foundBodyElement).toHaveStyle({
          fontSize: 10,
          fontWeight: "bold",
        });
      });
      it("Should match savedetails style ", () => {
        const { getByTestId } = render(<AddDepartmentForm/>);
        const foundBodyElement = getByTestId("savedetails");
        expect(foundBodyElement).toHaveStyle({
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        });
      });
      it("Should match savedbutn style ", () => {
        const { getByTestId } = render(<AddDepartmentForm/>);
        const foundBodyElement = getByTestId('savebutn');
        expect(foundBodyElement).toHaveStyle({
          alignSelf: "flex-end",
          alignItems: "flex-end",
          borderRadius: 8,
          paddingVertical: 14,
          paddingHorizontal: 30,
          backgroundColor: "#7DBAE2",
          borderColor: "#000000",
          borderWidth: 2,
        });
      });
})

describe("AddCourseForm Screen",()=>{
    it("Should match Input style ", () => {
        const { getByTestId } = render(<AddDepartmentForm/>);
        const foundBodyElement = getByTestId("input");
        expect(foundBodyElement).toHaveStyle({
          padding: 10,
          backgroundColor: "#ddd",
          borderWidth: 1,
          borderRadius: 6,
          fontSize: 20,
          width: "100%",
        });
      });
      it("Should match error style ", () => {
        const { getByTestId } = render(<AddDepartmentForm/>);
        const foundBodyElement = getByTestId("error");
        expect(foundBodyElement).toHaveStyle({
          fontSize: 10,
          fontWeight: "bold",
        });
      });
      it("Should match savedetails style ", () => {
        const { getByTestId } = render(<AddDepartmentForm/>);
        const foundBodyElement = getByTestId("savedetails");
        expect(foundBodyElement).toHaveStyle({
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        });
      });
      it("Should match savedbutn style ", () => {
        const { getByTestId } = render(<AddDepartmentForm/>);
        const foundBodyElement = getByTestId('savebutn');
        expect(foundBodyElement).toHaveStyle({
          alignSelf: "flex-end",
          alignItems: "flex-end",
          borderRadius: 8,
          paddingVertical: 14,
          paddingHorizontal: 30,
          backgroundColor: "#7DBAE2",
          borderColor: "#000000",
          borderWidth: 2,
        });
      });
})

describe('Navigation', () => {
    test('navigating to the HomePage screen', () => {

      const { getByTestId } = render(<SigninForm/>);
      const { getByText } = render(<SigninForm/>);
      const onPress = jest.fn();

     expect(fireEvent.press(getByTestId("login-button234"))).toBeTruthy;
      //expect(getByTestId("login-button")).toBeTruthy();
      //expect(onPress).toHaveBeenCalled();
    });
  });


