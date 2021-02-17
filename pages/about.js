import Link from "next/link";
import { useT } from "../context/i18n";

export default function AboutPage() {
  const t = useT();

  return (
    <div>
      another page.
      <Link href="/">
        <a>{t("str_key_to_translate")}</a>
      </Link>
    </div>
  );
}
