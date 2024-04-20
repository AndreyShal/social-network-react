import {ContactType, ProfileSave, ProfileType} from "redux/profile-reducer";
import React from "react";
import {useFormik} from "formik";
import {maxLengthFn, requiredFn} from "utils/validators/validators";
import {Input, Textarea} from "components/common/Preloader/FormsControls/FormsControls";

export const ProfileDataForm = ({profile, saveProfile, goToEditMode}: ProfileDataFormProps) => {

    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,

            ...profile.contacts,

        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (requiredFn(values.fullName)) {
                errors.fullName = requiredFn(values.fullName)
            }
            if (maxLengthFn(30)(values.fullName)) {
                errors.fullName = maxLengthFn(30)(values.fullName)
            }

            if (requiredFn(values.youtube)) {
                errors.youtube = requiredFn(values.youtube)
            }
            if (maxLengthFn(30)(values.youtube)) {

                errors.youtube = maxLengthFn(30)(values.youtube)
            }
            console.log(errors)
            return errors
        },
        onSubmit: (values) => {
            saveProfile({
                fullName: values.fullName,
                lookingForAJob: values.lookingForAJob,
                lookingForAJobDescription: values.lookingForAJobDescription,
                aboutMe: values.aboutMe,
                contacts: {
                    youtube: values.youtube,
                    facebook: values.facebook,
                    github: values.github,
                    instagram: values.instagram,
                    mainLink: values.mainLink,
                    twitter: values.twitter,
                    website: values.website,
                    vk: values.vk
                }
            })
            goToEditMode(false)
            formik.resetForm()
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <button onClick={() => {
                }}>save
                </button>
            </div>
            <div>
                <div>
                    <b>Full name</b>: <Input placeholder={"Full name"}
                                             type="text"
                                             {...formik.getFieldProps('fullName')}
                                             touched={formik.touched.fullName} errors={formik.errors.fullName}
                />
                </div>
                <div>
                    <b>Looking for a job</b>: <input type={"checkbox"} name={"lookingForAJob"}
                                                     onChange={formik.handleChange}
                                                     checked={formik.values.lookingForAJob}/>
                </div>
                <div><b>My professional skills</b>:
                    <Textarea placeholder={"My professional skills"}
                              {...formik.getFieldProps('lookingForAJobDescription')}
                              touched={formik.touched.lookingForAJobDescription}
                              errors={formik.errors.lookingForAJobDescription}/>
                </div>
            </div>
            <div>
                <b>About me</b>: <Textarea placeholder={"About me"}
                                           {...formik.getFieldProps('aboutMe')}
                                           touched={formik.touched.aboutMe}
                                           errors={formik.errors.aboutMe}/>
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map((key) => {
                // const keys: string = `${key}`
                const errors: FormikErrorType = formik.errors;
                const touched: FormikTouchedType = formik.touched;
                return <div key={key}>
                    <Input
                        placeholder={key}
                        type="text"
                        {...formik.getFieldProps(key)}
                        touched={touched[key]}
                        errors={errors[key]}
                    />
                </div>
            })}
            </div>
        </form>
    )
}

//types
type ProfileDataFormProps = {
    profile: ProfileType,
    saveProfile: (profile: ProfileSave) => void
    goToEditMode: (active: boolean) => void
}

type FormikErrorType = {
    [key: string]: any,
}

type FormikTouchedType = {
    [key: string]: any,
}
