import Link from "next/link";
import { useT } from "../context/i18n";

export default function IndexPage() {
  const t = useT();
  debugger;

  return (
    <div>
      hey buddy
      <Link href="/about">
        <a>{t('str_key_to_translate')}</a>
      </Link>
    </div>
  );
}
