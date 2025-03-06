import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import InputError from '@/Components/InputError';
import { Link, Head, useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    // onChange = (event) => {
    //     setData(event.target.name, event.target.value)
    // }

    const submit = (e) => {
        e.preventDefault();  

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form onSubmit={submit} className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        value="name"
                                        forInput="name">
                                        Full Name
                                    </InputLabel>
                                    <TextInput
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        placeholder="Your Fullname"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required>
                                    </TextInput>
                                </div>
                                <div>
                                    <InputLabel
                                        value="Email"
                                        forInput="email">
                                        Email
                                    </InputLabel>
                                    <TextInput
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        placeholder="Your Email"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required>
                                    </TextInput>
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel
                                        value="Password"
                                        forInput="password">
                                        Password
                                    </InputLabel>
                                    <TextInput
                                       id="password"
                                       type="password"
                                       name="password"
                                       value={data.password}
                                       className="mt-1 block w-full"
                                       placeholder="Your Password"
                                       onChange={(e) => setData('password', e.target.value)}
                                       required>
                                    </TextInput>
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel
                                        value="Confirm Password"
                                        forInput="password_confirmation">
                                        Password
                                    </InputLabel>
                                    <TextInput
                                       id="password_confirmation"
                                       type="password"
                                       name="password_confirmation"
                                       value={data.password_confirmation}
                                       className="mt-1 block w-full"
                                       placeholder="Your Password"
                                       onChange={(e) => setData('password_confirmation', e.target.value)}
                                       required>
                                    </TextInput>
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                
                                    <Button type="submit" variant="primary" processing={processing}>
                                        <span className="text-base font-semibold">
                                            Sign Up
                                        </span>
                                    </Button>

                                <Link href={route('login')}>
                                    <Button variant="light-outline">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}