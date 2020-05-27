/** 
 * A Deno permission name or a full permission descriptor.
 * 
 * See https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 *
 * @public
 */
export type GuardGrant = Deno.PermissionName | Deno.PermissionDescriptor;

/**
 * Configuration for the guard.
 * 
 * Use with the _guard()_ method.
 * 
 * @public
 */
export interface GuardOptions {
  /**
   * An optional list of Deno permission names or descriptors
   * that should be permitted by the guard
   */
  granted?: GuardGrant[];
  /**
   * An optional flag to determine whether the guard
   * should stop the process when permissions listed in the `granted`
   * array have not been granted.
   */
  exitOnMissing?: boolean;
  /**
   * An optional flag to determine whether the guard should
   * stop the process when permissions not listed in the `granted`
   * array have been granted.
   */
  exitOnExtra?: boolean;
  /**
   * An optional flag to determine the guard should log any
   * warnings or errors to the console.
   */
  log?: boolean;
}

/**
 * A permission descriptor merged with it's status.
 * 
 * See https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 * 
 * @private
 */
type PermissionDescriptorStatus =
  & Deno.PermissionStatus
  & Deno.PermissionDescriptor;

/** 
 * A granted status for a permission.
 *
 * See:
 * 
 * - https://w3c.github.io/permissions/#status-of-a-permission
 * - https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 * 
 * @public
 */
export const GRANTED: Deno.PermissionState = "granted";
/** 
 * A denied status for a permission.
 *
 * See:
 * 
 * - https://w3c.github.io/permissions/#status-of-a-permission
 * - https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 * 
 * @public
 */
export const DENIED: Deno.PermissionState = "denied";
/** 
 * A prompt status for a permission.
 *
 * See:
 * 
 * - https://w3c.github.io/permissions/#status-of-a-permission
 * - https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 * 
 * @public
 */
export const PROMPT: Deno.PermissionState = "prompt";

/** 
 * The "powerful feature" "run" which needs permission.
 *
 * See:
 * 
 * - https://w3c.github.io/permissions/#status-of-a-permission
 * - https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 *
 * Note that the definition of `PermissionName` in the above spec is swapped
 * out for a set of Deno permissions which are not web-compatible.
 * 
 * @public
 */
export const RUN: Deno.PermissionName = "run";
/** 
 * The "powerful feature" "read" which needs permission.
 *
 * See:
 * 
 * - https://w3c.github.io/permissions/#status-of-a-permission
 * - https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 *
 * Note that the definition of `PermissionName` in the above spec is swapped
 * out for a set of Deno permissions which are not web-compatible.
 * 
 * @public
 */
export const READ: Deno.PermissionName = "read";
/** 
 * The "powerful feature" "write" which needs permission.
 *
 * See:
 * 
 * - https://w3c.github.io/permissions/#status-of-a-permission
 * - https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 *
 * Note that the definition of `PermissionName` in the above spec is swapped
 * out for a set of Deno permissions which are not web-compatible.
 * 
 * @public
 */
export const WRITE: Deno.PermissionName = "write";
/** 
 * The "powerful feature" "net" which needs permission.
 *
 * See:
 * 
 * - https://w3c.github.io/permissions/#status-of-a-permission
 * - https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 *
 * Note that the definition of `PermissionName` in the above spec is swapped
 * out for a set of Deno permissions which are not web-compatible.
 * 
 * @public
 */
export const NET: Deno.PermissionName = "net";
/** 
 * The "powerful feature" "env" which needs permission.
 *
 * See:
 * 
 * - https://w3c.github.io/permissions/#status-of-a-permission
 * - https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 *
 * Note that the definition of `PermissionName` in the above spec is swapped
 * out for a set of Deno permissions which are not web-compatible.
 * 
 * @public
 */
export const ENV: Deno.PermissionName = "env";
/** 
 * The "powerful feature" "plugin" which needs permission.
 *
 * See:
 * 
 * - https://w3c.github.io/permissions/#status-of-a-permission
 * - https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 *
 * Note that the definition of `PermissionName` in the above spec is swapped
 * out for a set of Deno permissions which are not web-compatible.
 * 
 * @public
 */
export const PLUGIN: Deno.PermissionName = "plugin";
/** 
 * The "powerful feature" "hrtime" which needs permission.
 *
 * See:
 * 
 * - https://w3c.github.io/permissions/#status-of-a-permission
 * - https://github.com/denoland/deno/blob/master/cli/js/lib.deno.unstable.d.ts
 *
 * Note that the definition of `PermissionName` in the above spec is swapped
 * out for a set of Deno permissions which are not web-compatible.
 * 
 * @public
 */
export const HRTIME: Deno.PermissionName = "hrtime";

/**
 * A list of all top-level permissions as descriptors.
 * 
 * @private
 */
const topLevelPermissions: Deno.PermissionDescriptor[] = [
  { name: RUN },
  { name: READ },
  { name: WRITE },
  { name: NET },
  { name: ENV },
  { name: PLUGIN },
  { name: HRTIME },
];

/**
 * A map of top-level permissions to their flag.
 * 
 * @private
 */
const permissionNameToFlagMap: Map<Deno.PermissionName, string> = new Map(
  topLevelPermissions.map(({ name }) => [name, `--allow-${name}`]),
);

/**
 * A list of top-level permissions that support an optional whitelist.
 * 
 * @private
 */
const permissionsWithWhitelists: Deno.PermissionName[] = [READ, NET, WRITE];

/**
 * Regex for matching HTTP/HTTPS protocols.
 * 
 * @private
 */
const HTTP_PROTOCOL = /^https?\:\/\//;

/**
 * Adds the current grant status to each the provided permission descriptors.
 * 
 * @param {Deno.PermissionDescriptor[]} permissionDescriptors 
 * @returns {Promise<PermissionDescriptorStatus[]>} The requested permission statuses.
 * @private
 */
const getPermissionDescriptorStatus = async (
  permissionDescriptors: Deno.PermissionDescriptor[],
): Promise<
  PermissionDescriptorStatus[]
> =>
  Promise.all(permissionDescriptors.map(
    async (
      permissionDescriptor: Deno.PermissionDescriptor,
    ): Promise<PermissionDescriptorStatus> => ({
      ...permissionDescriptor,
      ...await Deno.permissions.query(permissionDescriptor),
    }),
  ));

/**
 * Handles the optional logging and process exiting for scenarios
 * in which insecure and ungranted top-level permissions have been set.
 * 
 * @param {PermissionDescriptorStatus[]} permissions 
 * @param {GuardOptions} options 
 * @returns {void}
 * @private
 */
const handleUngrantedTopLevelPermissions = (
  permissions: PermissionDescriptorStatus[],
  options: GuardOptions,
): void => {
  if (options.log) {
    for (const { name } of permissions) {
      console.error(
        `permission-guard: error: insecure top-level permission "${
          permissionNameToFlagMap.get(name)
        }" has been provided`,
      );
    }
  }

  if (options.exitOnExtra) {
    if (options.log) {
      console.error(
        "permission-guard: exiting due to insecure top-level permissions",
      );
    }
    Deno.exit(1);
  }
};

/**
 * Returns a permission's whitelist value if it exists, otherwise
 * an empty string ("") is returned.
 * 
 * @param param
 * @returns {string}
 * @private
 */
const getPermissionWhitelist = (
  { url, path }: any = {},
): string => {
  if (url) return url.replace(HTTP_PROTOCOL, "");
  if (path) return path;

  return "";
};

/**
 * Handles the optional logging and process exiting for scenarios
 * in which configured / required permissions are missing.
 * 
 * @param {PermissionDescriptorStatus[]} permissions 
 * @param {GuardOptions} options 
 * @returns {void}
 * @private
 */
const handleMissingGrantedPermissions = (
  permissions: PermissionDescriptorStatus[],
  options: GuardOptions,
): void => {
  if (options.log) {
    for (const { name, state, ...parameters } of permissions) {
      const permissionArgument = getPermissionWhitelist(parameters);
      console.warn(
        `permission-guard: warning: missing permission "${
          permissionNameToFlagMap.get(name)
        }${permissionArgument ? `=${permissionArgument}` : ""}"`,
      );
    }
  }

  if (options.exitOnMissing) {
    if (options.log) {
      console.error(
        "permission-guard: exiting due to missing required permissions",
      );
    }
    Deno.exit(1);
  }
};

/**
 * Filters the provided permissions to those which support
 * a whitelist but have be left with top-level scope.
 * 
 * @param {Deno.PermissionDescriptor[]} granted 
 * @returns {Deno.PermissionDescriptor[]}
 * @private
 */
const getUnscopedPermissions = (
  granted: Deno.PermissionDescriptor[],
): Deno.PermissionDescriptor[] =>
  granted.filter(({ name, ...parameters }) =>
    !getPermissionWhitelist(parameters) &&
    permissionsWithWhitelists.includes(name)
  );

/**
 * Handles the optional logging of recommendations when a top-level permission
 * has been requested that supports whitelisting.
 * 
 * @param {PermissionDescriptorStatus[]} permissions
 * @returns {void}
 * @private
 */
const handleUnscopedPermissions = (
  permissions: Deno.PermissionDescriptor[],
): void => {
  for (const { name } of permissions) {
    const flag = permissionNameToFlagMap.get(name);

    console.warn(
      `permission-guard: warning: insecure top-level permission "${flag}" has been provided. Consider using a scoped permission with whitelist instead "${flag}=<allow-${name}>"`,
    );
  }
};

/**
 * Provides a set of defences for your application.
 * 
 * This is done by verifying:
 * 
 * 1. No unnecessary permissions have been set at runtime.
 * 2. Requested / required permissions have been set at runtime.
 * 
 * Optional configuration parameters for the guard include:
 * 
 * - `granted` - a list of Deno permission names or descriptors
 * that should be permitted by the guard. Default: `[]`.
 * - `exitOnMissing` - a flag to determine whether the guard
 * should stop the process when permissions listed in the `granted`
 * array have not been granted. Default: `false`.
 * - `exitOnExtra` - a flag to determine whether the guard should
 * stop the process when permissions not listed in the `granted`
 * array have been granted. Default: `true`.
 * - `log` - a flag to determine the guard should log any
 * warnings or errors to the console. Default: `false`.
 * 
 * If the guard determines to stop the process, the exit code will
 * be `1`, i.e. `Deno.exit(1)`.
 * 
 * As the Deno Permissions API is currently tagged as "unstable", this
 * method will currently only perform the above defenses if the process
 * is started with the `--unstable` flag. Once the API becomes stable,
 * this flag will no longer be required. If the flag is not provided,
 * guard will simply return as a no-op, so it is safe to use the guard
 * in applications that won't be passed the `--unstable` flag.
 * 
 * @param {GuardOptions} options 
 * @returns {Promise<void>}
 */
export async function guard(options: GuardOptions = {}): Promise<void> {
  if (typeof Deno.permissions === "undefined") return;

  const {
    granted = [],
    exitOnMissing = false,
    exitOnExtra = true,
    log = false,
  } = options;

  const grantedDescriptors = granted.map((permission) =>
    typeof permission === "string" ? { name: permission } : permission
  );

  if (log) {
    const unscopedPermissions = getUnscopedPermissions(grantedDescriptors);

    if (unscopedPermissions.length) {
      handleUnscopedPermissions(unscopedPermissions);
    }
  }

  const currentTopLevelPermissionStatus = await getPermissionDescriptorStatus(
    topLevelPermissions,
  );

  const ungrantedTopLevelPermissions = currentTopLevelPermissionStatus.filter(
    (permissionState) =>
      !grantedDescriptors.some((grantedDescriptor) =>
        permissionState.name === grantedDescriptor.name &&
        !getPermissionWhitelist(grantedDescriptor)
      ) &&
      permissionState.state === GRANTED,
  );

  if (ungrantedTopLevelPermissions.length) {
    handleUngrantedTopLevelPermissions(
      ungrantedTopLevelPermissions,
      { exitOnExtra, log },
    );
  }

  const grantedPermissionStatus = await getPermissionDescriptorStatus(
    grantedDescriptors,
  );

  const missingPermissions = grantedPermissionStatus.filter((permissionState) =>
    permissionState.state !== GRANTED
  );

  if (missingPermissions.length) {
    handleMissingGrantedPermissions(missingPermissions, { exitOnMissing, log });
  }
}
