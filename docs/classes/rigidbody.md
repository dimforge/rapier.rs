---
id: "rigidbody"
title: "RigidBody"
sidebar_label: "RigidBody"
---

[@dimforge/rapier3d](../index.md) › [Globals](../globals.md) › [RigidBody](rigidbody.md)

A rigid body.

To create a new rigid-body, use the `RigidBodyBuilder` structure.

## Hierarchy

* **RigidBody**

## Index

### Methods

* [bodyType](rigidbody.md#bodytype)
* [collider](rigidbody.md#collider)
* [createCollider](rigidbody.md#createcollider)
* [handle](rigidbody.md#handle)
* [isDynamic](rigidbody.md#isdynamic)
* [isKinematic](rigidbody.md#iskinematic)
* [isStatic](rigidbody.md#isstatic)
* [linvel](rigidbody.md#linvel)
* [mass](rigidbody.md#mass)
* [numColliders](rigidbody.md#numcolliders)
* [translation](rigidbody.md#translation)

## Methods

###  bodyType

▸ **bodyType**(): *string*

Defined in rapier3d.d.ts:274

The type of this rigid-body: static, dynamic, or kinematic.

**Returns:** *string*

___

###  collider

▸ **collider**(`at`: number): *[Collider](collider.md)*

Defined in rapier3d.d.ts:269

Retrieves the `i-th` collider attached to this rigid-body.

# Parameters
- `at`: The index of the collidder to retrieve. Must be a number in `[0, this.numColliders()[`.
        This index is **not** the same as the unique identifier of the collider.

**Parameters:**

Name | Type |
------ | ------ |
`at` | number |

**Returns:** *[Collider](collider.md)*

___

###  createCollider

▸ **createCollider**(`collider`: [ColliderDesc](colliderdesc.md)): *[Collider](collider.md)*

Defined in rapier3d.d.ts:249

Creates a new collider attached to his rigid-body from the given collider descriptor.

# Parameters
- `collider`: The collider description used to create the collider.

**Parameters:**

Name | Type |
------ | ------ |
`collider` | [ColliderDesc](colliderdesc.md) |

**Returns:** *[Collider](collider.md)*

___

###  handle

▸ **handle**(): *number*

Defined in rapier3d.d.ts:254

The unique integer identifier of this rigid-body.

**Returns:** *number*

___

###  isDynamic

▸ **isDynamic**(): *boolean*

Defined in rapier3d.d.ts:289

Is this rigid-body dynamic?

**Returns:** *boolean*

___

###  isKinematic

▸ **isKinematic**(): *boolean*

Defined in rapier3d.d.ts:284

Is this rigid-body kinematic?

**Returns:** *boolean*

___

###  isStatic

▸ **isStatic**(): *boolean*

Defined in rapier3d.d.ts:279

Is this rigid-body static?

**Returns:** *boolean*

___

###  linvel

▸ **linvel**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:235

The linear velocity of this rigid-body.

**Returns:** *[Vector](vector.md)*

___

###  mass

▸ **mass**(): *number*

Defined in rapier3d.d.ts:240

The mass of this rigid-body.

**Returns:** *number*

___

###  numColliders

▸ **numColliders**(): *number*

Defined in rapier3d.d.ts:259

The number of colliders attached to this rigid-body.

**Returns:** *number*

___

###  translation

▸ **translation**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:230

The world-space position of this rigid-body.

**Returns:** *[Vector](vector.md)*
