import { env } from "@/env/env";

class EncryptMatch {
  static encryptMatch(id: string): string {
    return `${env.SECRET_JWT}${id}${env.SECRET_JWT}`;
  }

  static decryptMatch(match: string): string {
    const id: string = match.replace(env.SECRET_JWT, "").replace(env.SECRET_JWT, "");

    return id;
  }
}

export { EncryptMatch };
