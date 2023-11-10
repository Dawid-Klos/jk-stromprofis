
import { services } from "@config/services";
import { convertTitleToHref } from "@utils/functions";

export default function Page({ params }: { params: { title: string } }) {
    const title = params.title.toString();

    const service = services.find((service) => convertTitleToHref(service.title) === title);

    return (
        <>
        <h1>{title}</h1>
        </>
    );
}