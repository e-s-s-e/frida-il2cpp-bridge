import { cache } from "decorator-cache-getter";

import { createNF } from "../utils/extensions";
import { raise } from "../utils/console";

/** @internal */
export class Api {
    @cache
    static get _registerLogCallback(): (method: NativePointer) => void {
        return createNF(this.r`register_log_callback`, "void", ["pointer"]);
    }

    @cache
    static get _arrayGetElements(): (array: NativePointer) => NativePointer {
        return createNF(this.r`array_elements`, "pointer", ["pointer"]);
    }

    @cache
    static get _arrayGetLength(): (array: NativePointer) => number {
        return createNF(this.r`array_length`, "uint32", ["pointer"]);
    }

    @cache
    static get _arrayNew(): (klass: NativePointer, size: number) => NativePointer {
        return createNF(this.r`array_new`, "pointer", ["pointer", "uint32"]);
    }

    @cache
    static get _assemblyGetImage(): (assembly: NativePointer) => NativePointer {
        return createNF(this.r`assembly_get_image`, "pointer", ["pointer"]);
    }

    @cache
    static get _assemblyGetName(): (assembly: NativePointer) => string | null {
        return createNF(this.r`assembly_get_name`, "utf8string", ["pointer"]);
    }

    @cache
    static get _classFromName(): (image: NativePointer, namespace: string, name: string) => NativePointer {
        return createNF(this.r`class_from_name`, "pointer", ["pointer", "utf8string", "utf8string"]);
    }

    @cache
    static get _classFromType(): (type: NativePointer) => NativePointer {
        return createNF(this.r`class_from_type`, "pointer", ["pointer"]);
    }

    @cache
    static get _classGetArrayClass(): (klass: NativePointer, rank: number) => NativePointer {
        return createNF(this.r`array_class_get`, "pointer", ["pointer", "uint32"]);
    }

    @cache
    static get _classGetArrayElementSize(): (klass: NativePointer) => number {
        return createNF(this.r`class_array_element_size`, "int", ["pointer"]);
    }

    @cache
    static get _classGetAssemblyName(): (klass: NativePointer) => string | null {
        return createNF(this.r`class_get_assemblyname`, "utf8string", ["pointer"]);
    }

    @cache
    static get _classGetDeclaringType(): (klass: NativePointer) => NativePointer {
        return createNF(this.r`class_get_declaring_type`, "pointer", ["pointer"]);
    }

    @cache
    static get _classGetElementClass(): (klass: NativePointer) => NativePointer {
        return createNF(this.r`class_get_element_class`, "pointer", ["pointer"]);
    }

    @cache
    static get _classGetFieldCount(): (klass: NativePointer) => number {
        return createNF(this.r`class_get_field_count`, "uint16", ["pointer"]);
    }

    @cache
    static get _classGetFields(): (klass: NativePointer, iter: NativePointer) => NativePointer {
        return createNF(this.r`class_get_fields`, "pointer", ["pointer", "pointer"]);
    }

    @cache
    static get _classGetGenericClass(): (klass: NativePointer) => NativePointer {
        return createNF(this.r`class_get_generic_class`, "pointer", ["pointer"]);
    }

    @cache
    static get _classGetImage(): (klass: NativePointer) => NativePointer {
        return createNF(this.r`class_get_image`, "pointer", ["pointer"]);
    }

    @cache
    static get _classGetInstanceSize(): (klass: NativePointer) => number {
        return createNF(this.r`class_instance_size`, "uint32", ["pointer"]);
    }

    @cache
    static get _classGetInterfaceCount(): (klass: NativePointer) => number {
        return createNF(this.r`class_get_interface_count`, "uint16", ["pointer"]);
    }

    @cache
    static get _classGetInterfaces(): (klass: NativePointer, iter: NativePointer) => NativePointer {
        return createNF(this.r`class_get_interfaces`, "pointer", ["pointer", "pointer"]);
    }

    @cache
    static get _classGetMethodCount(): (klass: NativePointer) => number {
        return createNF(this.r`class_get_method_count`, "uint16", ["pointer"]);
    }

    @cache
    static get _classGetMethods(): (klass: NativePointer, iter: NativePointer) => NativePointer {
        return createNF(this.r`class_get_methods`, "pointer", ["pointer", "pointer"]);
    }

    @cache
    static get _classGetName(): (klass: NativePointer) => string | null {
        return createNF(this.r`class_get_name`, "utf8string", ["pointer"]);
    }

    @cache
    static get _classGetNamespace(): (klass: NativePointer) => string | null {
        return createNF(this.r`class_get_namespace`, "utf8string", ["pointer"]);
    }

    @cache
    static get _classGetParent(): (klass: NativePointer) => NativePointer {
        return createNF(this.r`class_get_parent`, "pointer", ["pointer"]);
    }

    @cache
    static get _classGetStaticFieldData(): (klass: NativePointer) => NativePointer {
        return createNF(this.r`class_get_static_field_data`, "pointer", ["pointer"]);
    }

    @cache
    static get _classGetType(): (klass: NativePointer) => NativePointer {
        return createNF(this.r`class_get_type`, "pointer", ["pointer"]);
    }

    @cache
    static get _classHasStaticConstructor(): (klass: NativePointer) => boolean {
        return createNF(this.r`class_has_static_constructor`, "bool", ["pointer"]);
    }

    @cache
    static get _classInit(): (klass: NativePointer) => void {
        return createNF(this.r`runtime_class_init`, "void", ["pointer"]);
    }

    @cache
    static get _classIsAssignableFrom(): (klass: NativePointer, otherKlass: NativePointer) => boolean {
        return createNF(this.r`class_is_assignable_from`, "bool", ["pointer", "pointer"]);
    }

    @cache
    static get _classIsEnum(): (klass: NativePointer) => boolean {
        return createNF(this.r`class_is_enum`, "bool", ["pointer"]);
    }

    @cache
    static get _classIsInterface(): (klass: NativePointer) => boolean {
        return createNF(this.r`class_is_interface`, "bool", ["pointer"]);
    }

    @cache
    static get _classIsStaticConstructorFinished(): (klass: NativePointer) => boolean {
        return createNF(this.r`class_is_static_constructor_finished`, "bool", ["pointer"]);
    }

    @cache
    static get _classIsSubclassOf(): (klass: NativePointer, otherKlass: NativePointer, checkInterfaces: boolean) => boolean {
        return createNF(this.r`class_is_subclass_of`, "bool", ["pointer", "pointer", "bool"]);
    }

    @cache
    static get _classIsValueType(): (klass: NativePointer) => boolean {
        return createNF(this.r`class_is_valuetype`, "bool", ["pointer"]);
    }

    @cache
    static get _domainGet(): () => NativePointer {
        return createNF(this.r`domain_get`, "pointer", []);
    }

    @cache
    static get _domainGetAssemblies(): (domain: NativePointer, iter: NativePointer) => NativePointer {
        return createNF(this.r`domain_get_assemblies`, "pointer", ["pointer", "pointer"]);
    }

    @cache
    static get _domainGetName(): (domain: NativePointer) => string | null {
        return createNF(this.r`domain_get_name`, "utf8string", ["pointer"]);
    }

    @cache
    static get _fieldGetClass(): (domain: NativePointer) => NativePointer {
        return createNF(this.r`field_get_parent`, "pointer", ["pointer"]);
    }

    @cache
    static get _fieldGetName(): (domain: NativePointer) => string | null {
        return createNF(this.r`field_get_name`, "utf8string", ["pointer"]);
    }

    @cache
    static get _fieldGetOffset(): (field: NativePointer) => number {
        return createNF(this.r`field_get_offset`, "int32", ["pointer"]);
    }

    @cache
    static get _fieldGetStaticValue(): (field: NativePointer, value: NativePointer) => void {
        return createNF(this.r`field_static_get_value`, "void", ["pointer", "pointer"]);
    }

    @cache
    static get _fieldGetType(): (field: NativePointer) => NativePointer {
        return createNF(this.r`field_get_type`, "pointer", ["pointer"]);
    }

    @cache
    static get _fieldIsInstance(): (field: NativePointer) => boolean {
        return createNF(this.r`field_is_instance`, "bool", ["pointer"]);
    }

    @cache
    static get _fieldIsLiteral(): (field: NativePointer) => boolean {
        return createNF(this.r`field_is_literal`, "bool", ["pointer"]);
    }

    @cache
    static get _gcCollect(): (maxGenerations: number) => void {
        return createNF(this.r`gc_collect`, "void", ["int"]);
    }

    @cache
    static get _gcCollectALittle(): () => void {
        return createNF(this.r`gc_collect_a_little`, "void", []);
    }

    @cache
    static get _gcDisable(): () => void {
        return createNF(this.r`gc_disable`, "void", []);
    }

    @cache
    static get _gcEnable(): () => void {
        return createNF(this.r`gc_enable`, "void", []);
    }

    @cache
    static get _gcHandleGetTarget(): (gcHandle: number) => NativePointer {
        return createNF(this.r`gchandle_get_target`, "pointer", ["uint32"]);
    }

    @cache
    static get _gcHandleFree(): (gcHandle: number) => void {
        return createNF(this.r`gchandle_free`, "void", ["uint32"]);
    }

    @cache
    static get _gcHandleNew(): (object: NativePointer, pinned: boolean) => number {
        return createNF(this.r`gchandle_new`, "uint32", ["pointer", "bool"]);
    }

    @cache
    static get _gcHandleNewWeakRef(): (object: NativePointer, trackResurrection: boolean) => number {
        return createNF(this.r`gchandle_new_weakref`, "uint32", ["pointer", "bool"]);
    }

    @cache
    static get _gcIsDisabled(): () => boolean {
        return createNF(this.r`gc_is_disabled`, "bool", []);
    }

    @cache
    static get _genericClassGetCachedClass(): (genericClass: NativePointer) => NativePointer {
        return createNF(this.r`field_is_literal`, "pointer", ["pointer"]);
    }

    @cache
    static get _genericClassGetTypesCount(): (genericClass: NativePointer) => number {
        return createNF(this.r`generic_class_get_types_count`, "uint32", ["pointer"]);
    }

    @cache
    static get _genericClassGetTypes(): (genericClass: NativePointer) => NativePointer {
        return createNF(this.r`generic_class_get_types`, "pointer", ["pointer"]);
    }

    @cache
    static get _imageGetClass(): (image: NativePointer, index: number) => NativePointer {
        return createNF(this.r`image_get_class`, "pointer", ["pointer", "uint"]);
    }

    @cache
    static get _imageGetClassCount(): (image: NativePointer) => number {
        return createNF(this.r`image_get_class_count`, "uint32", ["pointer"]);
    }

    @cache
    static get _imageGetClassStart(): (image: NativePointer) => number {
        return createNF(this.r`image_get_class_start`, "uint32", ["pointer"]);
    }

    @cache
    static get _imageGetName(): (image: NativePointer) => string | null {
        return createNF(this.r`image_get_name`, "utf8string", ["pointer"]);
    }

    @cache
    static get _init(): NativePointer {
        return this.r`init`;
    }

    @cache
    static get _livenessCalculationBegin(): (
        filter: NativePointer,
        maxObjectCount: number,
        callback: NativePointer,
        userData: NativePointer,
        onWorldStarted: NativePointer,
        onWorldStopped: NativePointer
    ) => NativePointer {
        return createNF(this.r`unity_liveness_calculation_begin`, "pointer", [
            "pointer",
            "int",
            "pointer",
            "pointer",
            "pointer",
            "pointer"
        ]);
    }

    @cache
    static get _livenessCalculationEnd(): (state: NativePointer) => void {
        return createNF(this.r`unity_liveness_calculation_end`, "void", ["pointer"]);
    }

    @cache
    static get _livenessCalculationFromStatics(): (state: NativePointer) => void {
        return createNF(this.r`unity_liveness_calculation_from_statics`, "void", ["pointer"]);
    }

    @cache
    static get _memorySnapshotCapture(): () => NativePointer {
        return createNF(this.r`capture_memory_snapshot`, "pointer", []);
    }

    @cache
    static get _memorySnapshotFree(): (snapshot: NativePointer) => void {
        return createNF(this.r`free_captured_memory_snapshot`, "void", ["pointer"]);
    }

    @cache
    static get _memorySnapshotGetTrackedObjectCount(): (snapshot: NativePointer) => UInt64 {
        return createNF(this.r`memory_snapshot_get_tracked_object_count`, "uint64", ["pointer"]);
    }

    @cache
    static get _memorySnapshotGetObjects(): (snapshot: NativePointer) => NativePointer {
        return createNF(this.r`memory_snapshot_get_objects`, "pointer", ["pointer"]);
    }

    @cache
    static get _methodGetClass(): (method: NativePointer) => NativePointer {
        return createNF(this.r`method_get_class`, "pointer", ["pointer"]);
    }

    @cache
    static get _methodGetName(): (method: NativePointer) => string | null {
        return createNF(this.r`method_get_name`, "utf8string", ["pointer"]);
    }

    @cache
    static get _methodGetParamCount(): (method: NativePointer) => number {
        return createNF(this.r`method_get_param_count`, "uint8", ["pointer"]);
    }

    @cache
    static get _methodGetParameters(): (method: NativePointer, iter: NativePointer) => NativePointer {
        return createNF(this.r`method_get_parameters`, "pointer", ["pointer", "pointer"]);
    }

    @cache
    static get _methodGetPointer(): (method: NativePointer) => NativePointer {
        return createNF(this.r`method_get_pointer`, "pointer", ["pointer"]);
    }

    @cache
    static get _methodGetReturnType(): (method: NativePointer) => NativePointer {
        return createNF(this.r`method_get_return_type`, "pointer", ["pointer"]);
    }

    @cache
    static get _methodIsGeneric(): (method: NativePointer) => boolean {
        return createNF(this.r`method_is_generic`, "bool", ["pointer"]);
    }

    @cache
    static get _methodIsInflated(): (method: NativePointer) => boolean {
        return createNF(this.r`method_is_inflated`, "bool", ["pointer"]);
    }

    @cache
    static get _methodIsInstance(): (method: NativePointer) => boolean {
        return createNF(this.r`method_is_instance`, "bool", ["pointer"]);
    }

    @cache
    static get _objectGetClass(): (method: NativePointer) => NativePointer {
        return createNF(this.r`object_get_class`, "pointer", ["pointer"]);
    }

    @cache
    static get _objectGetHeaderSize(): () => number {
        return createNF(this.r`object_header_size`, "uint", []);
    }

    @cache
    static get _objectNew(): (klass: NativePointer) => NativePointer {
        return createNF(this.r`object_new`, "pointer", ["pointer"]);
    }

    @cache
    static get _objectUnbox(): (object: NativePointer) => NativePointer {
        return createNF(this.r`object_unbox`, "pointer", ["pointer"]);
    }

    @cache
    static get _parameterGetName(): (parameter: NativePointer) => string | null {
        return createNF(this.r`parameter_get_name`, "utf8string", ["pointer"]);
    }

    @cache
    static get _parameterGetPosition(): (parameter: NativePointer) => number {
        return createNF(this.r`parameter_get_position`, "int32", ["pointer"]);
    }

    @cache
    static get _parameterGetType(): (parameter: NativePointer) => NativePointer {
        return createNF(this.r`parameter_get_type`, "pointer", ["pointer"]);
    }

    @cache
    static get _stringChars(): (string: NativePointer) => NativePointer {
        return createNF(this.r`string_chars`, "pointer", ["pointer"]);
    }

    @cache
    static get _stringLength(): (string: NativePointer) => number {
        return createNF(this.r`string_length`, "int32", ["pointer"]);
    }

    @cache
    static get _stringNew(): (string: string) => NativePointer {
        return createNF(this.r`string_new`, "pointer", ["utf8string"]);
    }

    @cache
    static get _stringSetLength(): (string: NativePointer, length: number) => void {
        return createNF(this.r`string_set_length`, "void", ["pointer", "int32"]);
    }

    @cache
    static get _valueBox(): (klass: NativePointer, data: NativePointer) => NativePointer {
        return createNF(this.r`value_box`, "pointer", ["pointer", "pointer"]);
    }

    @cache
    static get _threadAttach(): (domain: NativePointer) => void {
        return createNF(this.r`thread_attach`, "void", ["pointer"]);
    }

    @cache
    static get _typeGetClassOrElementClass(): (type: NativePointer) => NativePointer {
        return createNF(this.r`type_get_class_or_element_class`, "pointer", ["pointer"]);
    }

    @cache
    static get _typeGetDataType(): (type: NativePointer) => NativePointer {
        return createNF(this.r`type_get_data_type`, "pointer", ["pointer"]);
    }

    @cache
    static get _typeGetGenericClass(): (type: NativePointer) => NativePointer {
        return createNF(this.r`type_get_generic_class`, "pointer", ["pointer"]);
    }

    @cache
    static get _typeGetName(): (type: NativePointer) => string | null {
        return createNF(this.r`type_get_name`, "utf8string", ["pointer"]);
    }

    @cache
    static get _typeGetTypeEnum(): (type: NativePointer) => number {
        return createNF(this.r`type_get_type`, "int", ["pointer"]);
    }

    @cache
    static get _typeIsByReference(): (type: NativePointer) => boolean {
        return createNF(this.r`type_is_byref`, "bool", ["pointer"]);
    }

    @cache
    static get _typeOffsetOfTypeEnum(): () => number {
        return createNF(this.r`type_offset_of_type`, "uint16", []);
    }

    @cache
    static get sources(): (Module | CModule)[] {
        return [Il2Cpp.module, createMissingApi()];
    }

    private static r(exportName: readonly string[]): NativePointer {
        const name = "il2cpp_" + exportName;
        for (const source of this.sources) {
            const result = source instanceof Module ? source.findExportByName(name) : source[name];
            if (result) return result as NativePointer;
        }
        raise(`Couldn't resolve export "${name}".`);
    }
}

function createMissingApi(): CModule {
    const isEqualOrAbove_5_3_2 = +Il2Cpp.unityVersion.isEqualOrAbove("5.3.2");
    const isEqualOrAbove_5_3_3 = +Il2Cpp.unityVersion.isEqualOrAbove("5.3.3");
    const isEqualOrAbove_5_3_6 = +Il2Cpp.unityVersion.isEqualOrAbove("5.3.6");
    const isEqualOrAbove_5_4_4 = +Il2Cpp.unityVersion.isEqualOrAbove("5.4.4");
    const isEqualOrAbove_5_5_0 = +Il2Cpp.unityVersion.isEqualOrAbove("5.5.0");
    const isEqualOrAbove_5_6_0 = +Il2Cpp.unityVersion.isEqualOrAbove("5.6.0");
    const isEqualOrAbove_2017_1_0 = +Il2Cpp.unityVersion.isEqualOrAbove("2017.1.0");
    const isEqualOrAbove_2017_1_3 = +Il2Cpp.unityVersion.isEqualOrAbove("2017.1.3");
    const isEqualOrAbove_2018_1_0 = +Il2Cpp.unityVersion.isEqualOrAbove("2018.1.0");
    const isEqualOrAbove_2018_2_0 = +Il2Cpp.unityVersion.isEqualOrAbove("2018.2.0");
    const isEqualOrAbove_2018_3_0 = +Il2Cpp.unityVersion.isEqualOrAbove("2018.3.0");
    const isEqualOrAbove_2018_3_8 = +Il2Cpp.unityVersion.isEqualOrAbove("2018.3.8");
    const isEqualOrAbove_2019_1_0 = +Il2Cpp.unityVersion.isEqualOrAbove("2019.1.0");
    const isEqualOrAbove_2020_2_0 = +Il2Cpp.unityVersion.isEqualOrAbove("2020.2.0");

    const isBelow_5_3_3 = +!isEqualOrAbove_5_3_3;
    const isBelow_5_3_6 = +!isEqualOrAbove_5_3_6;
    const isBelow_5_5_0 = +!isEqualOrAbove_5_5_0;
    const isBelow_2018_1_0 = +!isEqualOrAbove_2018_1_0;
    const isBelow_2018_3_0 = +!isEqualOrAbove_2018_3_0;
    const isBelow_2019_3_0 = +Il2Cpp.unityVersion.isBelow("2019.3.0");
    const isBelow_2020_2_0 = +!isEqualOrAbove_2020_2_0;

    const isNotEqual_2017_2_0 = +!Il2Cpp.unityVersion.isEqual("2017.2.0");
    const isNotEqual_5_5_0 = +!Il2Cpp.unityVersion.isEqual("5.5.0");

    return new CModule(`
#include <stdint.h>

#define FIELD_ATTRIBUTE_STATIC 0x0010
#define FIELD_ATTRIBUTE_LITERAL 0x0040

#define METHOD_ATTRIBUTE_STATIC 0x0010

typedef struct _Il2CppObject Il2CppObject;
typedef struct _Il2CppString Il2CppString;
typedef struct _Il2CppArray Il2CppArray;
#if ${isEqualOrAbove_5_3_3}
typedef struct _Il2CppArraySize Il2CppArraySize;
#endif
typedef struct _Il2CppDomain Il2CppDomain;
typedef struct _Il2CppAssemblyName Il2CppAssemblyName;
typedef struct _Il2CppAssembly Il2CppAssembly;
typedef struct _Il2CppImage Il2CppImage;
typedef struct _Il2CppClass Il2CppClass;
typedef struct _Il2CppType Il2CppType;
typedef struct _FieldInfo FieldInfo;
typedef struct _MethodInfo MethodInfo;
typedef struct _ParameterInfo ParameterInfo;
typedef enum _Il2CppTypeEnum Il2CppTypeEnum;
typedef struct _VirtualInvokeData VirtualInvokeData;
typedef struct _Il2CppGenericInst Il2CppGenericInst;
typedef struct _Il2CppGenericClass Il2CppGenericClass;
typedef struct _Il2CppGenericContext Il2CppGenericContext;
typedef uint16_t Il2CppChar;
typedef struct _Il2CppManagedMemorySnapshot Il2CppManagedMemorySnapshot;
typedef struct _Il2CppMetadataSnapshot Il2CppMetadataSnapshot;
typedef struct _Il2CppManagedMemorySection Il2CppManagedMemorySection;
typedef struct _Il2CppManagedHeap Il2CppManagedHeap;
typedef struct _Il2CppStacks Il2CppStacks;
typedef struct _Il2CppGCHandles Il2CppGCHandles;
typedef struct _Il2CppRuntimeInformation Il2CppRuntimeInformation;

enum _Il2CppTypeEnum
{
    IL2CPP_TYPE_END = 0x00,
    IL2CPP_TYPE_VOID = 0x01,
    IL2CPP_TYPE_BOOLEAN = 0x02,
    IL2CPP_TYPE_CHAR = 0x03,
    IL2CPP_TYPE_I1 = 0x04,
    IL2CPP_TYPE_U1 = 0x05,
    IL2CPP_TYPE_I2 = 0x06,
    IL2CPP_TYPE_U2 = 0x07,
    IL2CPP_TYPE_I4 = 0x08,
    IL2CPP_TYPE_U4 = 0x09,
    IL2CPP_TYPE_I8 = 0x0a,
    IL2CPP_TYPE_U8 = 0x0b,
    IL2CPP_TYPE_R4 = 0x0c,
    IL2CPP_TYPE_R8 = 0x0d,
    IL2CPP_TYPE_STRING = 0x0e,
    IL2CPP_TYPE_PTR = 0x0f,
    IL2CPP_TYPE_BYREF = 0x10,
    IL2CPP_TYPE_VALUETYPE = 0x11,
    IL2CPP_TYPE_CLASS = 0x12,
    IL2CPP_TYPE_VAR = 0x13,
    IL2CPP_TYPE_ARRAY = 0x14,
    IL2CPP_TYPE_GENERICINST = 0x15,
    IL2CPP_TYPE_TYPEDBYREF = 0x16,
    IL2CPP_TYPE_I = 0x18,
    IL2CPP_TYPE_U = 0x19,
    IL2CPP_TYPE_FNPTR = 0x1b,
    IL2CPP_TYPE_OBJECT = 0x1c,
    IL2CPP_TYPE_SZARRAY = 0x1d,
    IL2CPP_TYPE_MVAR = 0x1e,
    IL2CPP_TYPE_CMOD_REQD = 0x1f,
    IL2CPP_TYPE_CMOD_OPT = 0x20,
    IL2CPP_TYPE_INTERNAL = 0x21,
    IL2CPP_TYPE_MODIFIER = 0x40,
    IL2CPP_TYPE_SENTINEL = 0x41,
    IL2CPP_TYPE_PINNED = 0x45,
    IL2CPP_TYPE_ENUM = 0x55
};

struct _Il2CppObject
{
#if ${isEqualOrAbove_2018_1_0}
    union
    {
        Il2CppClass * klass;
        struct Il2CppVTable * vtable;
    };
#else
    Il2CppClass * klass;
#endif
    struct MonitorData * monitor;
};

#if ${isBelow_2019_3_0}
size_t
il2cpp_object_header_size (void)
{
    return sizeof (Il2CppObject);
}
#endif

struct _Il2CppDomain
{
    struct Il2CppAppDomain * domain;
#if ${isEqualOrAbove_5_5_0}
    struct Il2CppAppDomainSetup * setup;
#else
    Il2CppObject * setup;
#endif
    struct Il2CppAppContext * default_context;
    const char * friendly_name;
    uint32_t domain_id;
#if ${isEqualOrAbove_5_5_0}
    volatile int threadpool_jobs;
#endif
#if ${isEqualOrAbove_2018_1_0}
    void * agent_info;
#endif
};

const char *
il2cpp_domain_get_name (const Il2CppDomain* domain)
{
    return domain->friendly_name;
}

struct _Il2CppAssemblyName
{
#if ${isEqualOrAbove_2018_1_0}
    const char * name;
    const char * culture;
    const char * hash_value;
    const char * public_key;
#else
    int32_t nameIndex;
    int32_t cultureIndex;
    int32_t hashValueIndex;
    int32_t publicKeyIndex;
#endif
    uint32_t hash_alg;
    int32_t hash_len;
    uint32_t flags;
    int32_t major;
    int32_t minor;
    int32_t build;
    int32_t revision;
    uint8_t publicKeyToken[8];
};

struct _Il2CppAssembly
{
#if ${isEqualOrAbove_2018_1_0}
    Il2CppImage * image;
#else
    int32_t imageIndex;
#endif
#if ${isEqualOrAbove_2018_3_0}
    uint32_t token;
#else
    int32_t customAttributeIndex;
#endif
#if ${isEqualOrAbove_5_3_3}
    int32_t referencedAssemblyStart;
    int32_t referencedAssemblyCount;
#endif
    Il2CppAssemblyName aname;
};

#if ${isEqualOrAbove_2018_1_0}
const char *
il2cpp_assembly_get_name (const Il2CppAssembly * assembly)
{
    return assembly->aname.name;
}
#endif

struct _Il2CppImage
{
    const char * name;
#if ${isEqualOrAbove_2017_1_3 && isNotEqual_2017_2_0}
    const char * nameNoExt;
#endif
#if ${isEqualOrAbove_2018_1_0}
    Il2CppAssembly * assembly;
#else
    int32_t assemblyIndex;
#endif
#if ${isBelow_2020_2_0}
    int32_t typeStart;
#endif
    uint32_t typeCount;
#if ${isEqualOrAbove_2017_1_0}
#if ${isBelow_2020_2_0}
    int32_t exportedTypeStart;
#endif
    uint32_t exportedTypeCount;
#endif
#if ${isEqualOrAbove_2018_3_0}
#if ${isBelow_2020_2_0}
    int32_t customAttributeStart;
#endif
    uint32_t customAttributeCount;
#endif
#if ${isEqualOrAbove_2020_2_0}
    const struct Il2CppMetadataImageHandle * metadataHandle;
    struct Il2CppNameToTypeHandleHashTable * nameToClassHashTable;
#else
    int32_t entryPointIndex;
    struct Il2CppNameToTypeDefinitionIndexHashTable * nameToClassHashTable;
#endif
#if ${isEqualOrAbove_2019_1_0}
    const struct Il2CppCodeGenModule * codeGenModule;
#endif
#if ${isEqualOrAbove_5_3_2}
    uint32_t token;
#endif
#if ${isEqualOrAbove_2018_1_0}
    uint8_t dynamic;
#endif
};


uint32_t
il2cpp_image_get_class_start (const Il2CppImage * image)
{
#if ${isBelow_2020_2_0}
    return image->typeStart;
#else
    return 0;
#endif
}


#if ${isBelow_2018_3_0}
uint32_t
il2cpp_image_get_class_count (const Il2CppImage * image)
{
    return image->typeCount;
}
#endif

struct _Il2CppType
{
    union
    {
        void * dummy;
        int32_t klassIndex;
#if ${isEqualOrAbove_2020_2_0}
        const struct Il2CppMetadataTypeHandle * typeHandle;
#endif
        const Il2CppType * type;
        struct Il2CppArrayType * array;
        int32_t genericParameterIndex;
#if ${isEqualOrAbove_2020_2_0}
        const struct Il2CppMetadataGenericParameterHandle * genericParameterHandle;
#endif
        Il2CppGenericClass * generic_class;
    } data;
    unsigned int attrs: 16;
    Il2CppTypeEnum type: 8;
    unsigned int num_mods: 6;
    unsigned int byref: 1;
    unsigned int pinned: 1;
};

uint16_t
il2cpp_type_offset_of_type (void)
{
    return (uint16_t) offsetof (Il2CppType, type);
}

const Il2CppType *
il2cpp_type_get_data_type (const Il2CppType * type)
{
    return type->data.type;
}

Il2CppGenericClass *
il2cpp_type_get_generic_class (const Il2CppType * type)
{
    return type->data.generic_class;
}

#if ${isBelow_2018_1_0}
unsigned int
il2cpp_type_is_byref (const Il2CppType * type)
{
    return type->byref;
}
#endif

struct _VirtualInvokeData
{
    void * methodPtr;
    const MethodInfo * method;
};

struct _Il2CppClass
{
    const Il2CppImage * image;
    void * gc_desc;
    const char * name;
    const char * namespaze;
#if ${isEqualOrAbove_2018_1_0}
    Il2CppType byval_arg;
    Il2CppType this_arg;
#else
    const Il2CppType* byval_arg;
    const Il2CppType* this_arg;
#endif
    Il2CppClass * element_class;
    Il2CppClass * castClass;
    Il2CppClass * declaringType;
    Il2CppClass * parent;
    Il2CppGenericClass * generic_class;
#if ${isEqualOrAbove_2020_2_0}
    const struct Il2CppMetadataTypeHandle * typeMetadataHandle;
#else
    const struct Il2CppTypeDefinition * typeDefinition;
#endif
#if ${isEqualOrAbove_5_6_0}
    const struct Il2CppInteropData * interopData;
#endif
#if ${isEqualOrAbove_2018_1_0}
    Il2CppClass * klass;
#endif
    FieldInfo * fields;
    const struct EventInfo* events;
    const struct PropertyInfo * properties;
    const MethodInfo ** methods;
    Il2CppClass ** nestedTypes;
    Il2CppClass ** implementedInterfaces;
#if ${isEqualOrAbove_5_3_6 && isBelow_5_5_0}
    VirtualInvokeData * vtable;
#endif
#if ${isBelow_5_3_6}
    const MethodInfo ** vtable;
#endif
    struct Il2CppRuntimeInterfaceOffsetPair * interfaceOffsets;
    void * static_fields;
    const struct Il2CppRGCTXData * rgctx_data;
    Il2CppClass ** typeHierarchy;
#if ${isEqualOrAbove_2019_1_0}
    void * unity_user_data;
#endif
#if ${isEqualOrAbove_2018_2_0}
    uint32_t initializationExceptionGCHandle;
#endif
    uint32_t cctor_started;
    uint32_t cctor_finished;
#if ${isEqualOrAbove_2019_1_0}
    __attribute__((aligned(8))) size_t cctor_thread;
#else
    __attribute__((aligned(8))) uint64_t cctor_thread;
#endif
#if ${isEqualOrAbove_2020_2_0}
    const struct Il2CppMetadataGenericContainerHandle * genericContainerHandle;
#else
    int32_t genericContainerIndex;
#endif
#if ${isBelow_2018_3_0}
    int32_t customAttributeIndex;
#endif
    uint32_t instance_size;
    uint32_t actualSize;
    uint32_t element_size;
    int32_t native_size;
    uint32_t static_fields_size;
    uint32_t thread_static_fields_size;
    int32_t thread_static_fields_offset;
    uint32_t flags;
#if ${isEqualOrAbove_5_3_2}
    uint32_t token;
#endif
    uint16_t method_count;
    uint16_t property_count;
    uint16_t field_count;
    uint16_t event_count;
    uint16_t nested_type_count;
    uint16_t vtable_count;
    uint16_t interfaces_count;
    uint16_t interface_offsets_count;
    uint8_t typeHierarchyDepth;
#if ${isEqualOrAbove_5_4_4 && isNotEqual_5_5_0}
    uint8_t genericRecursionDepth;
#endif
    uint8_t rank;
    uint8_t minimumAlignment;
#if ${isEqualOrAbove_2018_3_8}
    uint8_t naturalAligment;
#endif
    uint8_t packingSize;
#if ${isEqualOrAbove_2018_3_0}
    uint8_t initialized_and_no_error: 1;
#endif
    uint8_t valuetype: 1;
    uint8_t initialized: 1;
    uint8_t enumtype: 1;
    uint8_t is_generic: 1;
    uint8_t has_references: 1;
    uint8_t init_pending: 1;
    uint8_t size_inited: 1;
    uint8_t has_finalize: 1;
    uint8_t has_cctor: 1;
    uint8_t is_blittable: 1;
#if ${isEqualOrAbove_5_3_3}
    uint8_t is_import_or_windows_runtime: 1;
#endif
#if ${isEqualOrAbove_5_5_0}
    uint8_t is_vtable_initialized: 1;
#endif
#if ${isEqualOrAbove_2018_2_0}
    uint8_t has_initialization_error: 1;
#endif
#if ${isEqualOrAbove_5_5_0}
    VirtualInvokeData vtable[32];
#endif
};

uint16_t
il2cpp_class_get_interface_count (const Il2CppClass * klass)
{
    return klass->interfaces_count;
}

uint16_t
il2cpp_class_get_method_count (const Il2CppClass * klass)
{
    return klass->method_count;
}

uint16_t
il2cpp_class_get_field_count (const Il2CppClass * klass)
{
    return klass->field_count;
}

uint8_t
il2cpp_class_has_static_constructor (const Il2CppClass * klass)
{
    return klass->has_cctor;
}

uint32_t
il2cpp_class_is_static_constructor_finished (const Il2CppClass * klass)
{
    return klass->cctor_finished;
}

#if ${isBelow_2019_3_0}
void *
il2cpp_class_get_static_field_data (const Il2CppClass * klass)
{
    return klass->static_fields;
}
#endif

Il2CppGenericClass *
il2cpp_class_get_generic_class (const Il2CppClass * klass)
{
    return klass->generic_class;
}

struct _Il2CppGenericInst
{
    uint32_t type_argc;
    const Il2CppType ** type_argv;
};

struct _Il2CppGenericContext
{
    const Il2CppGenericInst * class_inst;
    const Il2CppGenericInst * method_inst;
};

struct _Il2CppGenericClass
{
#if ${isEqualOrAbove_2020_2_0}
    const Il2CppType * type;
#else
    int32_t typeDefinitionIndex;
#endif
    Il2CppGenericContext context;
    Il2CppClass * cached_class;
};

Il2CppClass *
il2cpp_generic_class_get_cached_class (Il2CppGenericClass * class)
{
    return class->cached_class;
}

uint32_t
il2cpp_generic_class_get_types_count (Il2CppGenericClass * class)
{
    return class->context.class_inst->type_argc;
}

const Il2CppType **
il2cpp_generic_class_get_types (Il2CppGenericClass * class)
{
    return class->context.class_inst->type_argv;
}

struct _FieldInfo
{
    const char * name;
    const Il2CppType * type;
    Il2CppClass * parent;
    int32_t offset;
#if ${isBelow_2018_3_0}
    int32_t customAttributeIndex;
#endif
#if ${isEqualOrAbove_5_3_2}
    uint32_t token;
#endif
};

uint8_t
il2cpp_field_is_instance (FieldInfo * field)
{
    return (field->type->attrs & FIELD_ATTRIBUTE_STATIC) == 0;
}

#if ${isBelow_2019_3_0}
uint8_t
il2cpp_field_is_literal (FieldInfo * field)
{
    return field->type->attrs & FIELD_ATTRIBUTE_LITERAL;
}
#endif

struct _ParameterInfo
{
    const char * name;
    int32_t position;
    uint32_t token;
#if ${isBelow_2018_3_0}
    int32_t customAttributeIndex;
#endif
    const Il2CppType * parameter_type;
};

const char *
il2cpp_parameter_get_name(const ParameterInfo * parameter)
{
    return parameter->name;
}

const Il2CppType *
il2cpp_parameter_get_type (const ParameterInfo * parameter)
{
    return parameter->parameter_type;
}

int32_t
il2cpp_parameter_get_position (const ParameterInfo * parameter)
{
    return parameter->position;
}

struct _MethodInfo
{
    void * methodPointer;
    void * invoker_method;
    const char * name;
    Il2CppClass * klass;
    const Il2CppType * return_type;
    const ParameterInfo * parameters;
    union
    {
        const struct Il2CppRGCTXData * rgctx_data;
#if ${isEqualOrAbove_2020_2_0}
        const struct Il2CppMetadataMethodDefinitionHandle * methodMetadataHandle;
#else
        const struct Il2CppMethodDefinition * methodDefinition;
#endif
    };
    union
    {
        const struct Il2CppGenericMethod * genericMethod;
#if ${isEqualOrAbove_2020_2_0}
        const struct Il2CppMetadataGenericContainerHandle * genericContainerHandle;
#else
        const struct Il2CppGenericContainer * genericContainer;
#endif
    };
#if ${isBelow_2018_3_0}
    int32_t customAttributeIndex;
#endif
    uint32_t token;
    uint16_t flags;
    uint16_t iflags;
    uint16_t slot;
    uint8_t parameters_count;
    uint8_t is_generic: 1;
    uint8_t is_inflated: 1;
#if ${isEqualOrAbove_2018_1_0}
    uint8_t wrapper_type: 1;
    uint8_t is_marshaled_from_native: 1;
#endif
};

void *
il2cpp_method_get_pointer(const MethodInfo * method)
{
    return method->methodPointer;
}

const ParameterInfo *
il2cpp_method_get_parameters (const MethodInfo * method,
                              void ** iter)
{
    uint16_t parameters_count = method->parameters_count;

    if (iter != 0 && parameters_count > 0)
    {
        void* temp = *iter;
        if (temp == 0)
        {
            *iter = (void**) method->parameters;
            return method->parameters;
        }
        else
        {
            const ParameterInfo * parameterInfo = (ParameterInfo*) *iter + 1;
            if (parameterInfo < method->parameters + parameters_count)
            {
                *iter = (void*) parameterInfo;
                return parameterInfo;
            }
        }
    }
    return 0;
}


struct _Il2CppString
{
    Il2CppObject object;
    int32_t length;
    Il2CppChar chars[32];
};

void
il2cpp_string_set_length (Il2CppString * string,
                          int32_t length)
{
    string->length = length;
}

struct _Il2CppArray
{
    Il2CppObject obj;
    struct Il2CppArrayBounds * bounds;
    uint32_t max_length;
#if ${isBelow_5_3_3}
    double vector[32];
#endif
};

#if ${isEqualOrAbove_5_3_3}
struct _Il2CppArraySize
{
#if ${isEqualOrAbove_2018_1_0}
    Il2CppObject obj;
    struct Il2CppArrayBounds * bounds;
    uint32_t max_length;
    __attribute__((aligned(8))) void * vector[32];
#else
    Il2CppArray Array;
    __attribute__((aligned(8))) void * vector;
#endif
};
#endif

#if ${isEqualOrAbove_5_3_3}
void *
il2cpp_array_elements (Il2CppArraySize * array) {
#if ${isEqualOrAbove_2018_1_0}
    return array->vector;
#else
    return &array->vector;
#endif
}
#else

void *
il2cpp_array_elements (Il2CppArray * array) {
    return (void*) array->vector;
}
#endif

struct _Il2CppMetadataSnapshot
{
    uint32_t typeCount;
    struct Il2CppMetadataType * types;
};

struct _Il2CppManagedMemorySection
{
    uint64_t sectionStartAddress;
    uint32_t sectionSize;
    uint8_t * sectionBytes;
};

struct _Il2CppManagedHeap
{
    uint32_t sectionCount;
    Il2CppManagedMemorySection * sections;
};

struct _Il2CppStacks
{
    uint32_t stackCount;
    Il2CppManagedMemorySection * stacks;
};

struct _Il2CppGCHandles
{
    uint32_t trackedObjectCount;
    Il2CppObject ** pointersToObjects;
};

struct _Il2CppRuntimeInformation
{
    uint32_t pointerSize;
    uint32_t objectHeaderSize;
    uint32_t arrayHeaderSize;
    uint32_t arrayBoundsOffsetInHeader;
    uint32_t arraySizeOffsetInHeader;
    uint32_t allocationGranularity;
};

struct _Il2CppManagedMemorySnapshot
{
    Il2CppManagedHeap heap;
    Il2CppStacks stacks;
    Il2CppMetadataSnapshot metadata;
    Il2CppGCHandles gcHandles;
    Il2CppRuntimeInformation runtimeInformation;
    void * additionalUserInformation;
};

uint32_t
il2cpp_memory_snapshot_get_tracked_object_count (Il2CppManagedMemorySnapshot * snapshot)
{
    return snapshot->gcHandles.trackedObjectCount;
}

Il2CppObject **
il2cpp_memory_snapshot_get_objects (Il2CppManagedMemorySnapshot * snapshot)
{
    return snapshot->gcHandles.pointersToObjects;
}
`);
}
