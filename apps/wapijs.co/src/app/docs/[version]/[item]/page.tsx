import {
	type ApiClass,
	type ApiEnum,
	type ApiInterface,
	type ApiItem,
	type ApiTypeAlias,
	type ApiFunction,
	ApiItemKind
} from '@microsoft/api-extractor-model'
import { notFound } from 'next/navigation'
import { Class } from '~/components/documentation-item/class'
import { Interface } from '~/components/documentation-item/interface'
import { TypeAlias } from '~/components/documentation-item/type-alias'
import { Enum } from '~/components/documentation-item/enum'
import { Function } from '~/components/documentation-item/function'
import { getMember } from '~/utils/api-extractor'

// function resolveMemberSearchParams(packageName: string, member?: ApiItem) {
// 	const params = new URLSearchParams({
// 		pkg: packageName,
// 		kind: member?.kind ?? '',
// 		name: member?.displayName ?? ''
// 	})

// 	switch (member?.kind) {
// 		case ApiItemKind.Interface:
// 		case ApiItemKind.Class: {
// 			const typedMember = member as ApiItemContainerMixin

// 			const properties = typedMember.members.filter(member =>
// 				[ApiItemKind.Property, ApiItemKind.PropertySignature].includes(member.kind)
// 			) as (ApiProperty | ApiPropertySignature)[]
// 			const methods = typedMember.members.filter(member =>
// 				[ApiItemKind.Method, ApiItemKind.Method].includes(member.kind)
// 			) as (ApiMethod | ApiMethodSignature)[]

// 			params.append('methods', methods.length.toString())
// 			params.append('props', properties.length.toString())
// 			break
// 		}

// 		case ApiItemKind.Enum: {
// 			const typedMember = member as ApiEnum
// 			params.append('members', typedMember.members.length.toString())
// 			break
// 		}

// 		default:
// 			break
// 	}

// 	return params
// }

function Member({ member }: { readonly member?: ApiItem }) {
	if (!member?.kind) {
		return <div>Cannot render that item type</div>
	}

	switch (member?.kind) {
		case ApiItemKind.Class:
			return <Class clazz={member as ApiClass} />
		case ApiItemKind.Function:
			return <Function item={member as ApiFunction} />
		case ApiItemKind.Interface:
			return <Interface item={member as ApiInterface} />
		case ApiItemKind.TypeAlias:
			return <TypeAlias item={member as ApiTypeAlias} />
		// case 'Variable':
		// 	return <Variable item={member as ApiVariable} />
		case ApiItemKind.Enum:
			return <Enum item={member as ApiEnum} />
		default:
			return <div>Cannot render that item type</div>
	}
}

export default async function Page({ params }: { params: { version: string; item: string } }) {
	const member = await getMember({
		branchOrVersion: params.version,
		item: params.item
	})

	console.log({ member })

	if (!member) {
		notFound()
	}

	return (
		<div className="relative top-6">
			<Member member={member} />
		</div>
	)
}
