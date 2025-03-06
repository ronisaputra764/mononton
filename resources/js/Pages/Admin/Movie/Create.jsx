import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";

export default function Create({ auth }) {

    const { data, setData, post, processing, errors  } = useForm({
            name: '',
            category: '',
            video_url: '',
            thumbnail: '',
            rating: '',
            is_featured: false,
    });
    
    const onHandleChange = () => {
        setData(event.target.name, event.target.type === "file" ? event.target.files[0] : event.target.value)
    }
    
    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.movie.store'));
    };
    
    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Admin - Create Movie</title>
            </Head>
            <h1 className="text-xl text-white">Insert a new Movie</h1>
            <hr className="mb-4" />
            <form className="text-white" onSubmit={submit}>

                <InputLabel forInput="name" value={"Name"} className="mt-4"/>
                <TextInput
                    type="text"
                    name="name"
                    variant="primary"
                    onChange={onHandleChange}
                    placeholder={"Enter the name of movie"}
                    isError={errors.name}
                />
                <InputError className="mt-2" message={errors.name} />

                <InputLabel forInput="category" value={"Category"} className="mt-4"/>
                <TextInput
                    type="text"
                    name="category"
                    variant="primary"
                    onChange={onHandleChange}
                    placeholder={"Enter the category of movie"}
                    isError={errors.category}
                />
                <InputError className="mt-2" message={errors.category} />

                <InputLabel forInput="video_url" value={"Video Url"} className="mt-4"/>
                <TextInput
                    type="url"
                    name="video_url"
                    variant="primary"
                    onChange={onHandleChange}
                    placeholder={"Insert the video url of movie"}
                    isError={errors.video_url}
                />
                <InputError className="mt-2" message={errors.video_url} />

                <InputLabel forInput="thumbnail" value={"Thumbnail"} className="mt-4"/>
                <input
                    className="input-file"
                    type="file"
                    name="thumbnail"
                    variant="primary"
                    onChange={onHandleChange}
                    placeholder={"Enter the thumbnail url of movie"}
                    
                />
                <InputError className="mt-2" message={errors.thumbnail} />

                <InputLabel forInput="rating" value={"Rating"} className="mt-4"/>
                <TextInput
                    type="number"
                    name="rating"
                    variant="primary"
                    onChange={onHandleChange}
                    placeholder={"Enter the rating of movie"}
                    isError={errors.rating}
                />
                <InputError className="mt-2" message={errors.rating} />

                <div className="flex flex-row mt-4 items-center">
                    <InputLabel forInput={"is_featured"} value={'Is Featured'} className="mr-3 mt-1" />
                    <Checkbox name={"is_featured"} onChange={(e) => setData("is_featured", e.target.checked)} />
                    <InputError className="mt-2" message={errors.is_featured}/>
                </div>

                <Button type='submit' className="mt-4 w-2/12" processing={processing}>
                    Save
                </Button>

            </form>
        </Authenticated>
    )
}